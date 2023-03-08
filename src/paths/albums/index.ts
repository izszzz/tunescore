import type { NextRouter } from "next/router";

import { albumListArgs } from "../../helpers/album";
import type { SessionArg } from "../../helpers/user";

export const albumPaginationQuery = ({
  router,
  session,
}: {
  router: NextRouter;
  session: SessionArg;
}) => ({
  args: {
    ...albumListArgs(session),
    where: {
      title: {
        is: { [router.locale]: { contains: router.query.q as string } },
      },
    },
  },
  options: { page: (router.query.page as string) || 0, perPage: 12 },
});
