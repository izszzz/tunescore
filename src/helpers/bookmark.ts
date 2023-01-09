import { getCurrentUserId } from "./user";
import type { BookmarkType, Prisma } from "@prisma/client";
import type { GetCurrentUserArg } from "./user";

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
  data,
  type,
  session,
}: {
  data: Prisma.MusicGetPayload<{
    include: {
      user: true;
      bookmarks: true;
    };
  }>;
  type: BookmarkType;
  session: GetCurrentUserArg;
}): Prisma.BookmarkUpdateManyWithoutMusicNestedInput =>
  data.bookmarks[0]
    ? {
        delete: {
          id: data.bookmarks[0]?.id,
        },
      }
    : {
        create: {
          resourceType: type,
          user: { connect: { id: getCurrentUserId(session) } },
          notifications:
            type === "Music" && data.type === "ORIGINAL" && data.user
              ? {
                  create: {
                    resourceType: "Bookmark",
                    user: { connect: { id: session.data?.user?.id } },
                  },
                }
              : undefined,
        },
      };
