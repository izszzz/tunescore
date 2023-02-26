import { Prisma } from "@prisma/client";

import type { SessionArg } from "./user";
import { userWhere, userSelect } from "./user";

export const voteInclude = (session: SessionArg) =>
  Prisma.validator<Prisma.VoteInclude>()({
    proponents: { where: userWhere(session), select: userSelect },
    opponents: { where: userWhere(session), select: userSelect },
    _count: { select: { proponents: true, opponents: true } },
  });
