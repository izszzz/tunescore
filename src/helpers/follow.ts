import type { Prisma } from "@prisma/client";

import { getCurrentUserId, userListArgs } from "./user";
import type { SessionArg } from "./user";

export const followArgs = {
  include: {
    follower: userListArgs,
    following: userListArgs,
  },
};
export const checkCurrentUserFollowingQuery = (session: SessionArg) => ({
  where: {
    following: { id: getCurrentUserId(session) },
  },
});
export const followMutate = ({
  data,
  session,
}: {
  data: Prisma.UserGetPayload<{
    include: {
      followers: true;
    };
  }>;
  session: SessionArg;
}): Prisma.FollowUpdateManyWithoutFollowerNestedInput => {
  const id = getCurrentUserId(session);
  return data.followers.length
    ? {
        delete: {
          id: data.followers[0]?.id,
        },
      }
    : {
        create: {
          following: { connect: { id } },
          notifications: {
            create: {
              unionType: "Follow",
              user: {
                connect: { id },
              },
            },
          },
        },
      };
};
