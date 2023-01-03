import { bandListQuery } from "../../helpers/band";
import { bookmarkQuery } from "../../helpers/bookmark";
import { createPath } from "../../helpers/path";
import { GetRouterArg } from "../../helpers/router";
import { GetCurrentUserArg } from "../../helpers/user";

export const albumPaginationPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetCurrentUserArg;
}) =>
  createPath([
    "pagination.album",
    {
      args: {
        include: {
          _count: { select: { bookmarks: true, artists: true, musics: true } },
          band: bandListQuery(session),
          bookmarks: bookmarkQuery({ type: "Album", session }),
        },
        where: {
          title: {
            is: {
              [router.locale as string]: { contains: router.query.q as string },
            },
          },
        },
      },
      options: { page: (router.query.page as string) || 0, perPage: 12 },
    },
  ]);
