import type { ItunesResponse } from "@izszzz/itunes-search-api";
import type { Prisma, LinkType } from "@prisma/client";
import * as R from "remeda";
import type SpotifyWebApi from "spotify-web-api-node";

import type { Context } from "../server/context";

export class Linker {
  async searchedSpotifyTracks(
    prisma: Context["prisma"],
    spotify: SpotifyWebApi,
    data: SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull>
  ) {
    const existedMusics = await getExistedMusicsBySpotifyId(
        prisma,
        data.items.map(({ id }) => id)
      ),
      notExistedTracks = data.items.filter(
        ({ id }) =>
          !existedMusics.find(
            ({ links }) =>
              links?.find(({ type }) => type === "Spotify")?.linkId === id
          )
      ),
      createdMusics = await createMusicsBySpotify(prisma, notExistedTracks),
      existedAlbums = await getExistedAlbumsBySpotifyId(
        prisma,
        data.items.map(({ album: { id } }) => id)
      ),
      notExistedTrackAlbums = data.items
        .map(({ album }) => album)
        .filter(
          ({ id }) =>
            !existedAlbums.find(
              ({ links }) =>
                links?.find(({ type }) => type === "Spotify")?.linkId === id
            )
        ),
      notExistedAlbums = notExistedTrackAlbums.length
        ? await (
            await spotify.getAlbums(notExistedTrackAlbums.map(({ id }) => id))
          ).body.albums
        : [],
      createdAlbums = await createdAlbumsBySpotify(prisma, notExistedAlbums),
      musicAlbums = R.pipe(
        data.items,
        R.map((track) => {
          const music = [...existedMusics, ...createdMusics].find(
              ({ links }) =>
                links?.find(({ type }) => type === "Spotify")?.linkId ===
                track.id
            ),
            album = [...existedAlbums, ...createdAlbums].find(
              ({ links }) =>
                links?.find(({ type }) => type === "Spotify")?.linkId ===
                track.album.id
            );
          if (music && album)
            return {
              where: { id: music.music?.id },
              data: { albums: { connect: { id: album.album?.id } } },
            };
        }),
        R.compact
      );
    prisma.$transaction(
      musicAlbums.map((musicAlbum) => prisma.music.update(musicAlbum))
    );
  }
  async searchedSpotifyAlbums(
    prisma: Context["prisma"],
    spotify: SpotifyWebApi,
    data: SpotifyApi.AlbumObjectFull[]
  ) {
    const existedAlbums = await getExistedAlbumsBySpotifyId(
        prisma,
        data.map(({ id }) => id)
      ),
      notExistedAlbums = data.filter(
        ({ id }) =>
          !existedAlbums.find(
            ({ links }) =>
              links?.find(({ type }) => type === "Spotify")?.linkId === id
          )
      ),
      createdAlbums = await createdAlbumsBySpotify(prisma, notExistedAlbums),
      existedMusics = await getExistedMusicsBySpotifyId(
        prisma,
        data.flatMap(({ tracks: { items } }) => items).map(({ id }) => id)
      ),
      notExistedAlbumMusics = data
        .flatMap(({ tracks: { items } }) => items)
        .filter(
          ({ id }) =>
            !existedMusics.find(
              ({ links }) =>
                links?.find(({ type }) => type === "Spotify")?.linkId === id
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
      createdMusics = await createMusicsBySpotify(prisma, notExistedMusics),
      albumMusics = R.pipe(
        data,
        R.map(({ id, tracks }) => {
          const album = [...existedAlbums, ...createdAlbums].find(
              ({ links }) =>
                links?.find(({ type }) => type === "Spotify")?.linkId === id
            ),
            musics = [...existedMusics, ...createdMusics].filter(({ links }) =>
              tracks.items
                .map(({ id }) => id)
                .includes(
                  links?.find(({ type }) => type === "Spotify")?.linkId || ""
                )
            );
          if (album)
            return {
              where: { id: album.id },
              data: {
                album: {
                  update: {
                    musics: {
                      connect: musics.map(({ music }) => ({ id: music?.id })),
                    },
                  },
                },
              },
            };
        }),
        R.compact
      );
    prisma.$transaction(
      albumMusics.map((albumMusic) => prisma.resource.update(albumMusic))
    );
  }
  createTagsByItunes = async (
    prisma: Context["prisma"],
    data: ItunesResponse<unknown & { primaryGenreName: string }>
  ) => {
    const tags = data.results.map((item) => item.primaryGenreName);
    const existedTags = await prisma.tag.findMany({
        where: { OR: tags.map((tag) => ({ name: tag })) },
      }),
      notExistedTags = [...new Set(tags)].filter(
        (tag) => !existedTags.find(({ name }) => name === tag)
      );
    await prisma.tag.createMany({
      data: notExistedTags.map((tag) => ({
        name: tag,
      })),
    });
  };
}
const getExistedResources = async (
    prisma: Context["prisma"],
    type: LinkType,
    ids: string[],
    include: Prisma.ResourceInclude
  ) =>
    await prisma.resource.findMany({
      where: {
        links: {
          every: {
            OR: ids.map((id) => ({
              linkId: id,
            })),
          },
        },
      },
      include,
    }),
  getExistedResourceBySpotifyId = (
    prisma: Context["prisma"],
    ids: string[],
    include: Prisma.ResourceInclude
  ) => getExistedResources(prisma, "Spotify", ids, include),
  getExistedMusicsBySpotifyId = (prisma: Context["prisma"], ids: string[]) =>
    getExistedResourceBySpotifyId(prisma, ids, { music: true }),
  getExistedAlbumsBySpotifyId = (prisma: Context["prisma"], ids: string[]) =>
    getExistedResourceBySpotifyId(prisma, ids, { album: true }),
  createMusicsBySpotify = async (
    prisma: Context["prisma"],
    tracks: SpotifyApi.TrackObjectFull[]
  ) =>
    await prisma.$transaction(
      tracks.map((item) =>
        prisma.resource.create({
          data: {
            name: { create: { ja: item.name, en: item.name } },
            unionType: "Music",
            links: { create: { type: "Spotify", linkId: item.id } },
            music: {
              create: {
                type: "COPY",
                visibillity: "PUBLIC",
                isrc: item.external_ids.isrc,
              },
            },
          },
          include: { music: true, links: true },
        })
      )
    ),
  createdAlbumsBySpotify = async (
    prisma: Context["prisma"],
    albums: SpotifyApi.AlbumObjectFull[]
  ) =>
    await prisma.$transaction(
      albums.map((album) =>
        prisma.resource.create({
          data: {
            name: { create: { ja: album.name, en: album.name } },
            unionType: "Album",
            links: {
              create: {
                type: "Spotify",
                linkId: album.id,
                small: album.images[2]?.url,
                medium: album.images[1]?.url,
                large: album.images[0]?.url,
              },
            },
            album: {
              create: {
                upc: album.external_ids.upc,
              },
            },
          },
          include: { album: true, links: true },
        })
      )
    );
