import { bandListQuery } from "../../helpers/band";
import { createPath } from "../../helpers/path";
import type { GetRouterArg } from "../../helpers/router";
import type { GetCurrentUserArg } from "../../helpers/user";

export const bandPaginationPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetCurrentUserArg;
}) =>
  createPath([
    "pagination.band",
    {
      args: {
        ...bandListQuery(session),
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
