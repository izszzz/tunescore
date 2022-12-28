import { createPath } from "../../../helpers/createPath";

export const bandShowPath = ({
  id,
  userId,
}: {
  id: string | undefined;
  userId: string | undefined;
}) =>
  createPath([
    "band.findUniqueBand",
    {
      where: { id },
      include: {
        artists: true,
        musics: {
          include: {
            band: true,
            composers: true,
            lyrists: true,
            tagMaps: { include: { tag: true } },
            bookmarks: {
              where: {
                user: { id: userId },
                resourceType: "Band",
              },
            },
          },
        },
      },
    },
  ]);
