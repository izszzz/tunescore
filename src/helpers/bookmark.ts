import type { BookmarkUnionType } from "@prisma/client";

import { userWhere } from "./user";
import type { SessionArg } from "./user";

export const bookmarkArgs = ({
  type,
  session,
}: {
  type: BookmarkUnionType;
  session: SessionArg;
}) => ({
  where: { user: userWhere(session), unionType: type },
});
