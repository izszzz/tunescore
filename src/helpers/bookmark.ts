import { match, P } from "ts-pattern";
import { getCurrentUserId } from "./user";
import type { ResourceType, Prisma } from "@prisma/client";
import type { GetCurrentUserArg } from "./user";

export const bookmarkQuery = ({
  type,
  session,
}: {
  type: ResourceType;
  session: GetCurrentUserArg;
}) => ({
  where: {
    user: { id: getCurrentUserId(session) },
    resourceType: type,
  },
});

type Include = { include: { bookmarks: true } };
type Data =
  | Prisma.ArtistGetPayload<Include>
  | Prisma.MusicGetPayload<{ include: { bookmarks: true; user: true } }>
  | Prisma.AlbumGetPayload<Include>
  | Prisma.BandGetPayload<Include>;
export const bookmarkMutate = ({
  data,
  type,
  session,
}: {
  data: Data;
  type: ResourceType;
  session: GetCurrentUserArg;
}): Prisma.BookmarkUpdateManyWithoutMusicNestedInput =>
  data.bookmarks[0]
    ? {
        delete: {
          id: data.bookmarks[0]?.id,
        },
      }
    : match(data)
        .with({ type: "ORIGINAL", user: P.not(P.nullish) }, () => ({
          create: {
            resourceType: type,
            user: { connect: { id: getCurrentUserId(session) } },
            notifications: {
              create: {
                resourceType: "Bookmark",
                user: { connect: { id: session.data?.user?.id } },
              },
            },
          },
        }))
        .otherwise(() => ({
          create: {
            resourceType: type,
            user: { connect: { id: getCurrentUserId(session) } },
          },
        }));
