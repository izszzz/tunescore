import { bandListQuery } from "../../helpers/band";
import type { GetRouterArg } from "../../helpers/router";
import type { GetCurrentUserArg } from "../../helpers/user";

export const bandPaginationQuery = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetCurrentUserArg;
}) => ({
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
});
