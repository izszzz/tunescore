import type { GetRouterArg } from "../../../../../helpers/router";
import type { SessionArg } from "../../../../../helpers/user";
import { getCurrentUserId } from "../../../../../helpers/user";

export const pullShowQuery = ({
  session,
  router,
}: {
  session: SessionArg;
  router: GetRouterArg;
}) => ({
  where: { id: router.query.pullId as string },
  ...pullShowArgs(session),
});

export type PullShowArgsType = ReturnType<typeof pullShowArgs>;
export const pullShowArgs = (session: SessionArg) => ({
  include: {
    user: true,
    music: true,
    vote: {
      include: {
        proponents: { where: { id: getCurrentUserId(session) } },
        opponents: { where: { id: getCurrentUserId(session) } },
        _count: {
          select: {
            proponents: true,
            opponents: true,
          },
        },
      },
    },
    comments: { include: { user: true } },
  },
});
