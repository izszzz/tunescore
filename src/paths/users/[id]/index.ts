import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";

import { userSelect, userWhere } from "../../../helpers/user";
import type { SessionArg } from "../../../helpers/user";

export type UserShowQueryType = ReturnType<typeof userShowQuery>;
export const userShowQuery = ({
  session,
  router: {
    query: { id },
  },
}: {
  session: SessionArg;
  router: NextRouter<"/users/[id]">;
}) =>
  Prisma.validator<Prisma.UserFindUniqueArgsBase>()({
    where: { id },
    ...userShowArgs(session),
  });

export type UserShowArgsType = ReturnType<typeof userShowArgs>;
const userShowArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.UserArgs>()({
    select: {
      followers: { where: { following: userWhere(session) } },
      ...userSelect,
    },
  });
