import { Prisma } from "@prisma/client";
import { isNonEmpty } from "ts-array-length";

import type { UserShowArgsType } from "../paths/users/[id]";

import { getCurrentUserId, userArgs } from "./user";
import type { SessionArg } from "./user";

export const followArgs = {
  include: { follower: userArgs, following: userArgs },
};
export const followMutate = ({
  data,
  session,
}: {
  data: Prisma.UserGetPayload<UserShowArgsType>;
  session: SessionArg;
}) => {
  const id = getCurrentUserId(session);
  return Prisma.validator<Prisma.FollowUpdateManyWithoutFollowerNestedInput>()(
    isNonEmpty(data.followers)
      ? { delete: { id: data.followers[0].id } }
      : { create: { following: { connect: { id } } } }
  );
};
