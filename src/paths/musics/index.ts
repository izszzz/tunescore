import { musicListQuery } from "../../helpers/music";
import { createPath } from "../../helpers/path";
import { GetRouterArg } from "../../helpers/router";
import { GetCurrentUserArg } from "../../helpers/user";

export const musicPaginationPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetCurrentUserArg;
}) =>
  createPath([
    "pagination.music",
    {
      args: {
        ...musicListQuery(session),
        where: (router.query.q as string)
          ? {
              title: {
                is: {
                  [router.locale as string]: {
                    contains: (router.query.q as string) || "",
                  },
                },
              },
            }
          : {},
      },
      options: { page: (router.query.page as string) || 0, perPage: 12 },
    },
  ]);
