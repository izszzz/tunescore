import { artistListArgs } from "../../helpers/artist";
import type { GetRouterArg } from "../../helpers/router";
import type { SessionArg } from "../../helpers/user";

export const artistPaginationQuery = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: SessionArg;
}) => ({
  args: {
    ...artistListArgs(session),
    where: {
      name: {
        is: {
          [router.locale as string]: { contains: router.query.q as string },
        },
      },
    },
  },
  options: { page: (router.query.page as string) || 0, perPage: 12 },
});
