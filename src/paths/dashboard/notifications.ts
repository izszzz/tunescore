import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";

import type { SessionArg } from "../../helpers/user";
import { userArgs, getCurrentUserId } from "../../helpers/user";
import type { WithPerPage } from "../../types";

export type NotificationArgsType = typeof notificationArgs;
export const notificationArgs = {
  include: {
    bookmarked: { include: { resource: { include: { name: true } } } },
    user: userArgs,
  },
};
export const notificationPaginationQuery = ({
  router,
  session,
  perPage,
}: WithPerPage<{
  router: NextRouter;
  session: SessionArg;
}>) => {
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
    options: { page: router.query.page as string, perPage },
  };
};
