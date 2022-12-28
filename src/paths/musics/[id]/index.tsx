import { createPath } from "../../../helpers/createPath";

export const musicShowPath = ({
  id,
  userId,
}: {
  id: string | undefined;
  userId: string | undefined;
}) =>
  createPath([
    "music.findUniqueMusic",
    {
      where: { id },
      include: {
        user: true,
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
        composers: {
          include: {
            bands: true,
            _count: {
              select: {
                bookmarks: true,
              },
            },
          },
        },
        lyrists: {
          include: {
            bands: true,
            _count: {
              select: {
                bookmarks: true,
              },
            },
          },
        },
        pulls: { where: { status: "VOTE" }, include: { vote: true }, take: 3 },
        bookmarks: {
          where: {
            user: { id: userId },
            resourceType: "Music",
          },
        },
        tagMaps: { include: { tag: true } },
      },
    },
  ]);
