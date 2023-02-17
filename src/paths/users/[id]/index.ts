import { Prisma } from "@prisma/client";

import { userSelect, userWhere } from "../../../helpers/user";
import type { SessionArg } from "../../../helpers/user";

export const userShowQuery = (session: SessionArg) =>
  Prisma.validator<Prisma.UserFindUniqueArgsBase>()({
    where: userWhere(session),
    ...userShowArgs(session),
  });

export type UserShowArgsType = ReturnType<typeof userShowArgs>;
export const userShowArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.UserArgs>()({
    select: {
      followers: { where: { following: userWhere(session) } },
      ...userSelect,
    },
  });
