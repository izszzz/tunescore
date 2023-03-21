import type { Prisma, StreamingLink } from "@prisma/client";
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
          !existedMusics.find(({ link }) => link?.streaming?.spotify?.id === id)
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
              ({ link }) => link?.streaming?.spotify?.id === id
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
              ({ link }) => link?.streaming?.spotify?.id === track.id
            ),
            album = [...existedAlbums, ...createdAlbums].find(
              ({ link }) => link?.streaming?.spotify?.id === track.album.id
            );
          if (music && album)
            return {
              where: { id: music.id },
              data: { albums: { connect: { id: album.id } } },
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
          !existedAlbums.find(({ link }) => link?.streaming?.spotify?.id === id)
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
              ({ link }) => link?.streaming?.spotify?.id === id
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
              ({ link }) => link?.streaming?.spotify?.id === id
            ),
            musics = [...existedMusics, ...createdMusics].filter(({ link }) =>
              tracks.items
                .map(({ id }) => id)
                .includes(link?.streaming?.spotify?.id || "")
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
  }
}
const getExistedResources = async (
    prisma: Context["prisma"],
    name: keyof StreamingLink,
    ids: string[],
    include: Prisma.ResourceInclude
  ) =>
    await prisma.resource.findMany({
      where: {
        link: {
          is: {
            streaming: {
              is: {
                OR: ids.map((id) => ({
                  [name]: { is: { id: { equals: id } } },
                })),
              },
            },
          },
        },
      },
      include,
    }),
  getExistedResourceBySpotifyId = (
    prisma: Context["prisma"],
    ids: string[],
    include: Prisma.ResourceInclude
  ) => getExistedResources(prisma, "spotify", ids, include),
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
            name: { ja: item.name, en: item.name },
            unionType: "Music",
            link: { streaming: { spotify: { id: item.id } } },
            music: {
              create: {
                type: "COPY",
                visibillity: "PUBLIC",
                isrc: item.external_ids.isrc,
              },
            },
          },
          include: { music: true },
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
            album: {
              create: {
                upc: album.external_ids.upc,
              },
            },
          },
          include: { album: true },
        })
      )
    );
