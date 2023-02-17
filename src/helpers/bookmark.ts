import type { Bookmark, BookmarkUnionType } from "@prisma/client";

import { getCurrentUserId, userWhere } from "./user";
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

export const bookmarkMutate = ({
  bookmarks,
  session,
  unionType,
}: {
  bookmarks: Bookmark[];
  session: SessionArg;
  unionType: BookmarkUnionType;
}) =>
  bookmarks.length
    ? { delete: { id: bookmarks[0]?.id } }
    : {
        create: {
          unionType,
          user: { connect: { id: getCurrentUserId(session) } },
        },
      };
