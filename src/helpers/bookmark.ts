import { Bookmark, BookmarkType } from "@prisma/client";
import { GetAuthenticateUserArg, getAuthenticateUserId } from "./user";

export const bookmarkMutate = ({
  bookmarked,
  bookmarks,
  type,
  session,
}: {
  bookmarked: boolean;
  bookmarks: Bookmark[];
  type: BookmarkType;
  session: GetAuthenticateUserArg;
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
          user: { connect: { id: getAuthenticateUserId(session) } },
        },
      };
