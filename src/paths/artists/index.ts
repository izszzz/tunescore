import { artistListQuery } from "../../helpers/artist";
import { createPath } from "../../helpers/path";
import { GetRouterArg } from "../../helpers/router";
import { GetCurrentUserArg } from "../../helpers/user";

export const artistPaginationPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetCurrentUserArg;
}) =>
  createPath([
    "pagination.artist",
    {
      args: {
        ...artistListQuery,
        where: {
          name: {
            is: {
              [router.locale as string]: { contains: router.query.q as string },
            },
          },
        },
      },
      options: { page: (router.query.page as string) || 0, perPage: 12 },
    },
  ]);
