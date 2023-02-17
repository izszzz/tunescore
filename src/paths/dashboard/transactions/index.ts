import type { GetRouterArg } from "../../../helpers/router";
import { transactionArgs } from "../../../helpers/transaction";
import type { SessionArg } from "../../../helpers/user";
import { getCurrentUserId } from "../../../helpers/user";

export const transactionsPaginationQuery = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: SessionArg;
}) => ({
  args: {
    include: transactionArgs(session),
    where: {
      OR: [
        {
          music: {
            user: { id: getCurrentUserId(session) },
          },
        },
        { user: { id: getCurrentUserId(session) } },
      ],
    },
  },
  options: { page: (router.query.page as string) || 0, perPage: 12 },
});
