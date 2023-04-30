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
    const resourceAlbum = await prisma.resource.findFirst({
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
      existedMusics = await getExistedMusicsBySpotifyId(
        prisma,
        data.tracks.items.map(({ id }) => id)
      ),
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
      createdMusics = await createMusicsBySpotify(prisma, notExistedTracks),
      existedAlbums = await getExistedAlbumsBySpotifyId(
        prisma,
        data.items.map(({ album: { id } }) => id)
      ),
      notExistedTrackAlbums = getNotExistedResourcesSpotify(
        data.items.map(({ album }) => album),
        existedAlbums
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
      createdAlbums = await createdAlbumsBySpotify(prisma, notExistedAlbums),
      existedMusics = await getExistedMusicsBySpotifyId(
        prisma,
        data.flatMap(({ tracks: { items } }) => items).map(({ id }) => id)
      ),
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
      data: notExistedTags.map((tag) => ({ name: tag })),
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
