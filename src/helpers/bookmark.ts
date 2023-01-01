import { Bookmark, BookmarkType } from "@prisma/client";
import { GetCurrentUserArg, getCurrentUserId } from "./user";

export const bookmarkQuery = ({
  type,
  session,
}: {
  type: BookmarkType;
  session: GetCurrentUserArg;
}) => ({
  where: {
    user: { id: getCurrentUserId(session) },
    resourceType: type,
  },
});

export const bookmarkMutate = ({
  bookmarked,
  bookmarks,
  type,
  session,
}: {
  bookmarked: boolean;
  bookmarks: Bookmark[];
  type: BookmarkType;
  session: GetCurrentUserArg;
}) =>
  bookmarked
    ? {
        delete: {
          id: bookmarks[0]?.id,
        },
      }
    : {
        create: {
          resourceType: type,
          user: { connect: { id: getCurrentUserId(session) } },
        },
      };
