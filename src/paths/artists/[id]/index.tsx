import { createPath } from "../../../helpers/createPath";

export const artistShowPath = ({ id }: { id: string }) =>
  createPath([
    "artist.findUniqueArtist",
    {
      where: { id },
      include: {
        bands: true,
        composedMusics: {
          include: { composers: true, lyrists: true, band: true },
        },
        writtenMusics: {
          include: { composers: true, lyrists: true, band: true },
        },
        musics: {
          include: { composers: true, lyrists: true, band: true },
        },
        bookmarks: true,
        tagMaps: { include: { tag: true } },
      },
    },
  ]);
