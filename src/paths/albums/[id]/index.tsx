import { createPath } from "../../../helpers/createPath";

export const albumShowPath = ({
  id,
  userId,
}: {
  id: string | undefined;
  userId: string | undefined;
}) =>
  createPath([
    "album.findUniqueAlbum",
    {
      where: { id },
      include: {
        musics: {
          include: {
            user: true,
            composers: true,
            lyrists: true,
            band: true,
            artists: true,
            bookmarks: true,
            _count: {
              select: {
                bookmarks: true,
              },
            },
          },
        },
        band: {
          include: {
            _count: {
              select: {
                bookmarks: true,
                artists: true,
                musics: true,
              },
            },
          },
        },
        artists: {
          include: {
            bands: true,
            _count: {
              select: {
                bookmarks: true,
              },
            },
          },
        },
        bookmarks: {
          where: {
            user: { id: userId },
            resourceType: "Album",
          },
        },
      },
    },
  ]);
