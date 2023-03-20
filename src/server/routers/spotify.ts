import * as R from "remeda";
import { z } from "zod";

import { getResourceByLinkIdQuery } from "../../helpers/resource";
import { authorized } from "../../helpers/spotify";
import { publicProcedure, router } from "../trpc";

export const spotifyRouter = router({
  search: publicProcedure
    .input(
      z.object({
        term: z.string(),
        type: z
          .union([
            z.literal("album"),
            z.literal("artist"),
            z.literal("playlist"),
            z.literal("track"),
            z.literal("show"),
            z.literal("episode"),
          ])
          .array(),
      })
    )
    .query(async ({ ctx, input: { term, type } }) => {
      const spotify = await authorized(ctx.session);
      return spotify.search(term, type).then(({ body }) => {
        const keys = Object.keys(body);
        return body[keys[0] as keyof SpotifyApi.SearchResponse];
      });
    }),
  searchTracks: publicProcedure
    .input(z.string())
    .query(async ({ ctx: { session, prisma }, input }) => {
      const spotify = await authorized(session),
        data = await spotify
          .searchTracks(input)
          .then(({ body }) => body.tracks);
      if (!data) return null;
      const existedMusics = await prisma.music.findMany(
          getResourceByLinkIdQuery(
            "spotify",
            data.items.map(({ id }) => id)
          )
        ),
        notExistedTracks = data.items.filter(
          ({ id }) =>
            !existedMusics.find(
              (music) => music.resource.link?.streaming?.spotify?.id === id
            )
        ),
        createdMusics = await prisma.$transaction(
          notExistedTracks.map((track) =>
            prisma.music.create({
              data: {
                type: "COPY",
                visibillity: "PUBLIC",
                isrc: track.external_ids.isrc,
                resource: {
                  create: {
                    name: { ja: track.name, en: track.name },
                    unionType: "Music",
                    link: { streaming: { spotify: { id: track.id } } },
                  },
                },
              },
              include: { resource: true },
            })
          )
        ),
        existedAlbums = await prisma.album.findMany(
          getResourceByLinkIdQuery(
            "spotify",
            data.items.map(({ album: { id } }) => id)
          )
        ),
        notExistedTrackAlbums = data.items
          .map(({ album }) => album)
          .filter(
            ({ id }) =>
              !existedAlbums.find(
                (album) => album.resource.link?.streaming?.spotify?.id === id
              )
          ),
        notExistedAlbums = notExistedTrackAlbums.length
          ? await (
              await spotify.getAlbums(notExistedTrackAlbums.map(({ id }) => id))
            ).body.albums
          : [],
        createdAlbums = await prisma.$transaction(
          notExistedAlbums.map((item) =>
            prisma.album.create({
              data: {
                resource: {
                  create: {
                    name: { ja: item.name, en: item.name },
                    unionType: "Album",
                    link: {
                      streaming: {
                        spotify: {
                          id: item.id,
                          image: {
                            size: {
                              small: item.images[2]?.url,
                              medium: item.images[1]?.url,
                              large: item.images[0]?.url,
                            },
                          },
                        },
                      },
                    },
                  },
                },
                upc: item.external_ids.upc,
              },
              include: { resource: true },
            })
          )
        ),
        musicAlbums = R.pipe(
          data.items,
          R.map((track) => {
            const music = [...existedMusics, ...createdMusics].find(
                (music) =>
                  music.resource.link?.streaming?.spotify?.id === track.id
              ),
              album = [...existedAlbums, ...createdAlbums].find(
                (album) =>
                  album.resource.link?.streaming?.spotify?.id === track.album.id
              );
            if (music && album)
              return {
                where: { id: music.id },
                data: {
                  albums: {
                    connect: { id: album.id },
                  },
                },
              };
          }),
          R.compact
        );
      prisma.$transaction(
        musicAlbums.map((musicAlbum) => prisma.music.update(musicAlbum))
      );
      return data;
    }),
  findUniqueTrack: publicProcedure
    .input(z.string().nullish())
    .query(async ({ ctx, input }) => {
      const spotify = await authorized(ctx.session);
      return input ? spotify.getTrack(input).then(({ body }) => body) : null;
    }),
  searchArtists: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const spotify = await authorized(ctx.session);
      return spotify.searchArtists(input).then(({ body }) => body.artists);
    }),
  findUniqueArtist: publicProcedure
    .input(z.string().nullish())
    .query(async ({ ctx, input }) => {
      const spotify = await authorized(ctx.session);
      return input ? spotify.getArtist(input).then(({ body }) => body) : null;
    }),
  searchAlbums: publicProcedure
    .input(z.string())
    .query(async ({ ctx: { session, prisma }, input }) => {
      const spotify = await authorized(session),
        ids = await spotify
          .searchAlbums(input)
          .then(({ body }) => body.albums?.items.map(({ id }) => id));
      if (!ids) return null;
      const data = await spotify.getAlbums(ids).then(({ body }) => body.albums),
        existedAlbums = await prisma.album.findMany(
          getResourceByLinkIdQuery(
            "spotify",
            data.map(({ id }) => id)
          )
        ),
        notExistedAlbums = data.filter(
          ({ id }) =>
            !existedAlbums.find(
              (album) => album.resource.link?.streaming?.spotify?.id === id
            )
        );
      console.log("aaaaaaaaa");
      console.log(notExistedAlbums);
      const createdAlbums = await prisma.$transaction(
          notExistedAlbums.map((album) =>
            prisma.album.create({
              data: {
                resource: {
                  create: {
                    name: { ja: album.name, en: album.name },
                    unionType: "Album",
                    link: {
                      streaming: {
                        spotify: {
                          id: album.id,
                          image: {
                            size: {
                              small: album.images[2]?.url,
                              medium: album.images[1]?.url,
                              large: album.images[0]?.url,
                            },
                          },
                        },
                      },
                    },
                  },
                },
                upc: album.external_ids.upc,
              },
              include: { resource: true },
            })
          )
        ),
        existedMusics = await prisma.music.findMany(
          getResourceByLinkIdQuery(
            "spotify",
            data.flatMap(({ tracks: { items } }) => items).map(({ id }) => id)
          )
        ),
        notExistedAlbumMusics = data
          .flatMap(({ tracks: { items } }) => items)
          .filter(
            ({ id }) =>
              !existedMusics.find(
                (album) => album.resource.link?.streaming?.spotify?.id === id
              )
          ),
        i = ~~(notExistedAlbumMusics.length / 50),
        isSurplus = !!(notExistedAlbumMusics.length % 50),
        notExistedMusics = await (
          await Promise.all(
            [...Array.from(Array(isSurplus ? i : i + 1).keys())].map((_, i) =>
              spotify
                .getTracks(
                  notExistedAlbumMusics
                    .map(({ id }) => id)
                    .slice(i * 50, (i + 1) * 50)
                )
                .then(({ body: { tracks } }) => tracks)
            )
          )
        ).flat(),
        createdMusics = await prisma.$transaction(
          notExistedMusics.map((item) =>
            prisma.music.create({
              data: {
                type: "COPY",
                visibillity: "PUBLIC",
                resource: {
                  create: {
                    name: { ja: item.name, en: item.name },
                    unionType: "Music",
                    link: { streaming: { spotify: { id: item.id } } },
                  },
                },
                isrc: item.external_ids.isrc,
              },
              include: { resource: true },
            })
          )
        ),
        albumMusics = R.pipe(
          data,
          R.map(({ id, tracks }) => {
            const album = [...existedAlbums, ...createdAlbums].find(
                (album) => album.resource.link?.streaming?.spotify?.id === id
              ),
              musics = [...existedMusics, ...createdMusics].filter((music) =>
                tracks.items
                  .map(({ id }) => id)
                  .includes(music.resource.link?.streaming?.spotify?.id || "")
              );
            if (album)
              return {
                where: { id: album.id },
                data: { musics: { connect: musics.map(({ id }) => ({ id })) } },
              };
          }),
          R.compact
        );
      prisma.$transaction(
        albumMusics.map((albumMusic) => prisma.album.update(albumMusic))
      );
      return data;
    }),
  findUniqueAlbum: publicProcedure
    .input(z.string().nullish())
    .query(async ({ ctx, input }) => {
      const spotify = await authorized(ctx.session);
      return input ? spotify.getAlbum(input).then(({ body }) => body) : null;
    }),
});
