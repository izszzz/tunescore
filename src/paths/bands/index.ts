import type { NextRouter } from "next/router";

import { bandListArgs } from "../../helpers/band";
import type { SessionArg } from "../../helpers/user";

export const bandPaginationQuery = ({
  router,
  session,
}: {
  router: NextRouter;
  session: SessionArg;
}) => ({
  args: {
    ...bandListArgs(session),
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
