import { musicListQuery } from "../../helpers/music";
import type { GetRouterArg } from "../../helpers/router";
import type { SessionArg } from "../../helpers/user";

export const musicPaginationQuery = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: SessionArg;
}) => ({
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
});
