import type { GetRouterArg } from "../../helpers/router";
import type { SessionArg } from "../../helpers/user";
import { userArgs, getCurrentUserId } from "../../helpers/user";

export type NotificationArgsType = typeof notificationArgs;
export const notificationArgs = {
  include: {
    bookmarked: { include: { music: true } },
    user: userArgs,
  },
};
export const notificationPaginationQuery = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: SessionArg;
}) => {
  const id = getCurrentUserId(session);
  return {
    args: {
      ...notificationArgs,
      where: {
        OR: [
          { bookmarked: { music: { user: { id } } } },
          { followed: { follower: { id } } },
          { commented: { issue: { id } } },
          { commented: { pull: { id } } },
        ],
      },
    },
    options: { page: (router.query.page as string) || 0, perPage: 12 },
  };
};
