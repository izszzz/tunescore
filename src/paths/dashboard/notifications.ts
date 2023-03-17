import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";

import type { SessionArg } from "../../helpers/user";
import { userArgs, getCurrentUserId } from "../../helpers/user";

export type NotificationArgsType = typeof notificationArgs;
export const notificationArgs = {
  include: { bookmarked: { include: { resource: true } }, user: userArgs },
};
export const notificationPaginationQuery = ({
  router,
  session,
}: {
  router: NextRouter;
  session: SessionArg;
}) => {
  const id = getCurrentUserId(session);
  return {
    args: Prisma.validator<Prisma.NotificationFindManyArgs>()({
      ...notificationArgs,
      where: {
        OR: [
          {
            bookmarked: {
              resource: { unionType: "Music", music: { user: { id } } },
            },
          },
          { followed: { follower: { id } } },
          { commented: { issue: { id } } },
          { commented: { pull: { id } } },
        ],
      },
    }),
    options: { page: (router.query.page as string) || 0 },
  };
};
