import { Prisma } from "@prisma/client";

import type { UserShowArgsType } from "../paths/users/[id]";

import { getCurrentUserId, userArgs, userWhere } from "./user";
import type { SessionArg } from "./user";

export const followArgs = {
  include: {
    follower: userArgs,
    following: userArgs,
  },
};
export const checkCurrentUserFollowingQuery = (session: SessionArg) => ({
  where: { following: userWhere(session) },
});
export const followMutate = ({
  data,
  session,
}: {
  data: Prisma.UserGetPayload<UserShowArgsType>;
  session: SessionArg;
}) => {
  const id = getCurrentUserId(session);
  return Prisma.validator<Prisma.FollowUpdateManyWithoutFollowerNestedInput>()(
    data.followers.length
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
        }
  );
};
