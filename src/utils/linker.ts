import type { ItunesResponse } from "@izszzz/itunes-search-api";
import type { Prisma, LinkType } from "@prisma/client";
import * as R from "remeda";
import type SpotifyWebApi from "spotify-web-api-node";

import { findLinkSpotify } from "../helpers/link";
import type { Context } from "../server/context";

export class Linker {
  async findedUniqueSpotifyAlbum(
    prisma: Context["prisma"],
    spotify: SpotifyWebApi,
    data: SpotifyApi.SingleAlbumResponse
  ) {
    const [resourceAlbum, existedMusics] = await Promise.all([
        prisma.resource.findFirst({
          where: {
            links: {
              some: {
                OR: data.tracks.items.map(({ id }) => ({
                  linkId: id,
                  type: "Spotify",
                })),
              },
            },
          },
        }),
        getExistedMusicsBySpotifyId(
          prisma,
          data.tracks.items.map(({ id }) => id)
        ),
      ]),
      notExistedSimpleTracks = getNotExistedResourcesSpotify(
        data.tracks.items,
        existedMusics
      ),
      notExistedTracks = notExistedSimpleTracks.length
        ? await (
            await spotify.getTracks(notExistedSimpleTracks.map(({ id }) => id))
          ).body.tracks
        : [],
      createdMusics = await createMusicsBySpotify(prisma, notExistedTracks);
    prisma.resource.update({
      where: { id: resourceAlbum?.id },
      data: {
        album: {
          update: {
            musics: {
              connect: [...createdMusics, ...existedMusics].map(({ id }) => ({
                id,
              })),
            },
          },
        },
      },
    });
  }
  async searchedSpotifyTracks(
    prisma: Context["prisma"],
    spotify: SpotifyWebApi,
    data: SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull>
  ) {
    const existedMusics = await getExistedMusicsBySpotifyId(
        prisma,
        data.items.map(({ id }) => id)
      ),
      notExistedTracks = getNotExistedResourcesSpotify(
        data.items,
        existedMusics
      ),
      [createdMusics, existedAlbums] = await Promise.all([
        createMusicsBySpotify(prisma, notExistedTracks),
        getExistedAlbumsBySpotifyId(
          prisma,
          data.items.map(({ album: { id } }) => id)
        ),
      ]),
      notExistedTrackAlbums = getNotExistedResourcesSpotify(
        data.items.map(({ album }) => album),
        existedAlbums
      ),
      notExistedAlbums = notExistedTrackAlbums.length
        ? (await spotify.getAlbums(notExistedTrackAlbums.map(({ id }) => id)))
            .body.albums
        : [],
      createdAlbums = await createdAlbumsBySpotify(prisma, notExistedAlbums),
      musicAlbums = R.pipe(
        data.items,
        R.map((track) => {
          const music = [...existedMusics, ...createdMusics].find(
              ({ links }) =>
                links && findLinkSpotify(links)?.linkId === track.id
            ),
            album = [...existedAlbums, ...createdAlbums].find(
              ({ links }) =>
                links && findLinkSpotify(links)?.linkId === track.album.id
            );
          if (music && album)
            return {
              where: { id: music.music?.id },
              data: { albums: { connect: { id: album.album?.id } } },
            };
        }),
        R.compact
      );
    this.createGenresBySpotify(prisma, notExistedAlbums);
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
      notExistedAlbums = getNotExistedResourcesSpotify(data, existedAlbums),
      [createdAlbums, existedMusics] = await Promise.all([
        createdAlbumsBySpotify(prisma, notExistedAlbums),
        getExistedMusicsBySpotifyId(
          prisma,
          data.flatMap(({ tracks: { items } }) => items).map(({ id }) => id)
        ),
      ]),
      notExistedAlbumTracks = getNotExistedResourcesSpotify(
        data.flatMap(({ tracks: { items } }) => items),
        existedMusics
      ),
      i = ~~(notExistedAlbumTracks.length / 50),
      isSurplus = !!(notExistedAlbumTracks.length % 50),
      notExistedMusics = await (
        await Promise.all(
          [...Array.from(Array(isSurplus ? i : i + 1).keys())].map((_, i) =>
            spotify
              .getTracks(
                notExistedAlbumTracks
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
              ({ links }) => links && findLinkSpotify(links)?.linkId === id
            ),
            musics = [...existedMusics, ...createdMusics].filter(({ links }) =>
              tracks.items
                .map(({ id }) => id)
                .includes((links && findLinkSpotify(links)?.linkId) || "")
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
    this.createGenresBySpotify(prisma, notExistedAlbums);
    prisma.$transaction(
      albumMusics.map((albumMusic) => prisma.resource.update(albumMusic))
    );
  }
  createGenresByItunes = (
    prisma: Context["prisma"],
    data: ItunesResponse<unknown & { primaryGenreName: string }>
  ) =>
    this.createGenres(
      prisma,
      data.results.map((item) => item.primaryGenreName)
    );
  createGenresBySpotify = (
    prisma: Context["prisma"],
    data: SpotifyApi.AlbumObjectFull[]
  ) =>
    this.createGenres(
      prisma,
      data.flatMap(({ genres }) => genres)
    );
  async createGenres(prisma: Context["prisma"], genres: string[]) {
    const existedGenres = await prisma.genre.findMany({
        where: { OR: genres.map((genre) => ({ name: genre })) },
      }),
      notExistedGenres = [...new Set(genres)].filter(
        (genre) => !existedGenres.find(({ name }) => name === genre)
      );
    prisma.genre.createMany({
      data: notExistedGenres.map((genre) => ({ name: genre })),
    });
  }
}
const getExistedResources = (
    prisma: Context["prisma"],
    type: LinkType,
    ids: string[],
    include: Prisma.ResourceInclude
  ) =>
    prisma.resource.findMany({
      where: {
        links: { some: { OR: ids.map((id) => ({ linkId: id, type })) } },
      },
      include,
    }),
  getExistedResourcesBySpotifyId = (
    prisma: Context["prisma"],
    ids: string[],
    include: Prisma.ResourceInclude
  ) => getExistedResources(prisma, "Spotify", ids, include),
  getExistedMusicsBySpotifyId = (prisma: Context["prisma"], ids: string[]) =>
    getExistedResourcesBySpotifyId(prisma, ids, { music: true, links: true }),
  getExistedAlbumsBySpotifyId = (prisma: Context["prisma"], ids: string[]) =>
    getExistedResourcesBySpotifyId(prisma, ids, { album: true, links: true }),
  getNotExistedResourcesSpotify = <T>(
    resources: (T & Record<"id", string>)[],
    existedResources: Awaited<ReturnType<typeof getExistedResources>>
  ) =>
    resources.filter(
      ({ id }) =>
        !existedResources.find(
          ({ links }) => links && findLinkSpotify(links)?.linkId === id
        )
    ),
  createMusicsBySpotify = (
    prisma: Context["prisma"],
    tracks: SpotifyApi.TrackObjectFull[]
  ) =>
    prisma.$transaction(
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
  createdAlbumsBySpotify = (
    prisma: Context["prisma"],
    albums: SpotifyApi.AlbumObjectFull[]
  ) =>
    prisma.$transaction(
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
