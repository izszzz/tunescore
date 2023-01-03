import { albumListQuery } from "../../helpers/album";
import { createPath } from "../../helpers/path";
import type { GetRouterArg } from "../../helpers/router";
import type { GetCurrentUserArg } from "../../helpers/user";

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
        ...albumListQuery(session),
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
