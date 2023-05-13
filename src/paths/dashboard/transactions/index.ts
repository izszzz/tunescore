import type { NextRouter } from "next/router";

import { transactionArgs } from "../../../helpers/transaction";
import type { SessionArg } from "../../../helpers/user";
import { getCurrentUserId } from "../../../helpers/user";
import type { WithPerPage } from "../../../types";

export const transactionsPaginationQuery = ({
  router,
  session,
  perPage,
}: WithPerPage<{
  router: NextRouter;
  session: SessionArg;
}>) => ({
  args: {
    include: transactionArgs(session),
    where: {
      OR: [
        { music: { user: { id: getCurrentUserId(session) } } },
        { user: { id: getCurrentUserId(session) } },
      ],
    },
  },
  options: { page: router.query.page as string, perPage },
});
