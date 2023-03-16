import type { Bookmark } from "@prisma/client";
import { isNonEmpty } from "ts-array-length";

import { getCurrentUserId, userWhere } from "./user";
import type { SessionArg } from "./user";

export const bookmarkArgs = (session: SessionArg) => ({
  where: { user: userWhere(session) },
});

export const bookmarkMutate = ({
  bookmarks,
  session,
}: {
  bookmarks: Bookmark[];
  session: SessionArg;
}) =>
  isNonEmpty(bookmarks)
    ? { delete: { id: bookmarks[0].id } }
    : { create: { user: { connect: { id: getCurrentUserId(session) } } } };
