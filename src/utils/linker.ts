import type { BaseParams, ItunesResponse } from "@izszzz/itunes-search-api";
import type { Prisma, LinkType } from "@prisma/client";
import * as R from "remeda";
import type SpotifyWebApi from "spotify-web-api-node";

import { popularity } from "../consts/spotify";
import { convertLangToLocale } from "../helpers/itunes";
import { findLinkSpotify } from "../helpers/link";
import { prisma } from "../server/db/client";

export class Linker {
  async findedUniqueItunes(
    url: string,
    name: string,
    lang: NonNullable<BaseParams["lang"]>
  ) {
    const locale = convertLangToLocale(lang),
      existedResource = await prisma.resource.findFirst({
        where: { links: { some: { linkId: url } } },
        include: { name: true },
      });
    if (!existedResource?.name?.[locale])
      await prisma.resource.update({
        where: { id: existedResource?.id },
        data: { name: { update: { [locale]: name } } },
        include: { name: true },
      });
  }
  async findedUniqueSpotifyAlbum(
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
        getExistedMusicsBySpotifyId(data.tracks.items.map(({ id }) => id)),
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
      createdMusics = await createMusicsBySpotify(notExistedTracks);
    prisma.resource.update({
      where: { id: resourceAlbum?.id },
      data: {
        genres: {
          connectOrCreate: data.genres.map((name) => ({
            where: { name },
            create: { name },
          })),
        },
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
  async findedUniqueSpotifyTrack(data: SpotifyApi.SingleTrackResponse) {
    const album = await prisma.album.findFirst({
      where: {
        resource: {
          links: {
            every: {
              type: "Spotify",
              linkId: data.album.id,
            },
          },
        },
      },
    });
    prisma.resource.update({
      where: { id: data?.id },
      data: {
        music: {
          update: {
            isrc: data.external_ids.isrc,
            albums: { connect: { id: album?.id } },
          },
        },
      },
    });
  }
  async searchedSpotifyTracks(
    spotify: SpotifyWebApi,
    data: SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull>
  ) {
    const existedMusics = await getExistedMusicsBySpotifyId(
        data.items.map(({ id }) => id)
      ),
      notExistedTracks = getNotExistedResourcesSpotify(
        data.items,
        existedMusics
      ),
      [createdMusics, existedAlbums] = await Promise.all([
        createMusicsBySpotify(notExistedTracks),
        getExistedAlbumsBySpotifyId(data.items.map(({ album: { id } }) => id)),
      ]),
      notExistedTrackAlbums = getNotExistedResourcesSpotify(
        data.items.map(({ album }) => album),
        existedAlbums
      ),
      notExistedAlbums = notExistedTrackAlbums.length
        ? (await spotify.getAlbums(notExistedTrackAlbums.map(({ id }) => id)))
            .body.albums
        : [],
      createdAlbums = await createdAlbumsBySpotify(notExistedAlbums),
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
    this.createGenresBySpotify(notExistedAlbums);
    prisma.$transaction(
      musicAlbums.map((musicAlbum) => prisma.music.update(musicAlbum))
    );
  }
  async searchedSpotifyAlbums(
    spotify: SpotifyWebApi,
    data: SpotifyApi.AlbumObjectFull[]
  ) {
    const existedAlbums = await getExistedAlbumsBySpotifyId(
        data.map(({ id }) => id)
      ),
      notExistedAlbums = getNotExistedResourcesSpotify(data, existedAlbums),
      [createdAlbums, existedMusics] = await Promise.all([
        createdAlbumsBySpotify(notExistedAlbums),
        getExistedMusicsBySpotifyId(
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
      createdMusics = await createMusicsBySpotify(notExistedMusics),
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
    this.createGenresBySpotify(notExistedAlbums);
    prisma.$transaction(
      albumMusics.map((albumMusic) => prisma.resource.update(albumMusic))
    );
  }
  createGenresByItunes = (
    data: ItunesResponse<unknown & { primaryGenreName: string }>
  ) => createGenres(data.results.map((item) => item.primaryGenreName));
  createGenresBySpotify = (data: SpotifyApi.AlbumObjectFull[]) =>
    createGenres(data.flatMap(({ genres }) => genres));
}
const getExistedResources = (
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
    ids: string[],
    include: Prisma.ResourceInclude
  ) => getExistedResources("Spotify", ids, include),
  getExistedMusicsBySpotifyId = (ids: string[]) =>
    getExistedResourcesBySpotifyId(ids, { music: true, links: true }),
  getExistedAlbumsBySpotifyId = (ids: string[]) =>
    getExistedResourcesBySpotifyId(ids, { album: true, links: true }),
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
  createMusicsBySpotify = (tracks: SpotifyApi.TrackObjectFull[]) =>
    prisma.$transaction(
      tracks.filter(item=>item.popularity > popularity).map((item) =>
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
  createdAlbumsBySpotify = (albums: SpotifyApi.AlbumObjectFull[]) =>
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
            genres: {
              connectOrCreate: album.genres.map((name) => ({
                where: { name },
                create: { name },
              })),
            },
          },
          include: { album: true, links: true },
        })
      )
    ),
  createGenres = async (genres: string[]) => {
    const existedGenres = await prisma.genre.findMany({
        where: { OR: genres.map((genre) => ({ name: genre })) },
      }),
      notExistedGenres = [...new Set(genres)].filter(
        (genre) => !existedGenres.find(({ name }) => name === genre)
      );
    prisma.genre.createMany({
      data: notExistedGenres.map((genre) => ({ name: genre })),
    });
  };
