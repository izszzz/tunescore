import type { NextRouter } from "next/router";

import { resourceListArgs } from "../../../helpers/resource";
import type { SessionArg } from "../../../helpers/user";
export const bookmarkQuery = ({
  router,
  session,
  perPage,
}: {
  router: NextRouter<"/users/[id]">;
  session: SessionArg;
  perPage: number;
}) => ({
  args: {
    where: { user: { id: router.query.id } },
    include: {
      resource: resourceListArgs(session),
    },
  },
  options: { page: 0, perPage },
});
