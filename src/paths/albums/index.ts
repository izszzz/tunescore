import { albumListArgs } from "../../helpers/album";
import type { GetRouterArg } from "../../helpers/router";
import type { SessionArg } from "../../helpers/user";

export const albumPaginationQuery = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: SessionArg;
}) => ({
  args: {
    ...albumListArgs(session),
    where: {
      title: {
        is: {
          [router.locale as string]: { contains: router.query.q as string },
        },
      },
    },
  },
  options: { page: (router.query.page as string) || 0, perPage: 12 },
});
