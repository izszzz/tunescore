import { createPath } from "../../../helpers/path";
import { getRouterId, GetRouterArg } from "../../../helpers/router";
import { GetCurrentUserArg, getCurrentUserId } from "../../../helpers/user";

export const bandShowPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetCurrentUserArg;
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
