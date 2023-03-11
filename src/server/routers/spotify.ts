import { z } from "zod";

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
      const spotify = await authorized(session);
      return spotify.searchTracks(input).then(({ body }) => {
        const data =
          body[Object.keys(body)[0] as keyof SpotifyApi.TrackSearchResponse];
        data?.items.map(async (item) => {
          // find or create music
          let music = await prisma.music.findFirst({
            where: {
              albums: {
                some: {
                  link: {
                    is: {
                      streaming: {
                        is: {
                          spotify: { is: { id: { equals: item.album.id } } },
                        },
                      },
                    },
                  },
                },
              },
            },
          });
          if (!music)
            music = await prisma.music.create({
              data: {
                type: "COPY",
                visibility: "PUBLIC",
                title: { ja: item.name, en: item.name },
              },
            });
          // find or create album
          let album = await prisma.album.findFirst({
            where: {
              link: {
                is: {
                  streaming: {
                    is: {
                      spotify: { is: { id: { equals: item.album.id } } },
                    },
                  },
                },
              },
            },
          });
          if (album) {
            if (!album.musicIDs.includes(music.id))
              prisma.album.update({
                where: { id: music.id },
                data: { musics: { connect: { id: music.id } } },
              });
          } else {
            album = await prisma.album.create({
              data: {
                title: { ja: item.album.name, en: item.album.name },
                musics: { connect: { id: music.id } },
                link: {
                  streaming: {
                    spotify: {
                      id: item.album.id,
                      image: {
                        size: {
                          small: item.album.images[2]?.url,
                          medium: item.album.images[1]?.url,
                          large: item.album.images[0]?.url,
                        },
                      },
                    },
                  },
                },
              },
            });
            await prisma.album.update({
              where: { id: music.id },
              data: { musics: { connect: { id: music.id } } },
            });
          }
        });
        return data;
      });
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
      return spotify
        .searchArtists(input)
        .then(
          ({ body }) =>
            body[Object.keys(body)[0] as keyof SpotifyApi.ArtistSearchResponse]
        );
    }),
  findUniqueArtist: publicProcedure
    .input(z.string().nullish())
    .query(async ({ ctx, input }) => {
      const spotify = await authorized(ctx.session);
      return input ? spotify.getArtist(input).then(({ body }) => body) : null;
    }),
  searchAlbums: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const spotify = await authorized(ctx.session);
      return spotify
        .searchAlbums(input)
        .then(
          ({ body }) =>
            body[Object.keys(body)[0] as keyof SpotifyApi.AlbumSearchResponse]
        );
    }),
  findUniqueAlbum: publicProcedure
    .input(z.string().nullish())
    .query(async ({ ctx, input }) => {
      const spotify = await authorized(ctx.session);
      return input ? spotify.getAlbum(input).then(({ body }) => body) : null;
    }),
});
