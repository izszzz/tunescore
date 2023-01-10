import { getCurrentUserId } from "./user";
import type { GetCurrentUserArg } from "./user";
import type { Prisma } from "@prisma/client";

export const checkCurrentUserFollowingQuery = (session: GetCurrentUserArg) => ({
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
  session: GetCurrentUserArg;
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
              resourceType: "Follow",
              user: {
                connect: { id },
              },
            },
          },
        },
      };
};
