import type { BookmarkUnionType, Prisma } from "@prisma/client";
import { match, P } from "ts-pattern";

import { getCurrentUserId } from "./user";
import type { SessionArg } from "./user";

export const bookmarkQuery = ({
  type,
  session,
}: {
  type: BookmarkUnionType;
  session: SessionArg;
}) => ({
  where: {
    user: { id: getCurrentUserId(session) },
    unionType: type,
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
  type: BookmarkUnionType;
  session: SessionArg;
}): Prisma.BookmarkUpdateManyWithoutMusicNestedInput => {
  const id = getCurrentUserId(session);
  return data.bookmarks[0]
    ? {
        delete: {
          id: data.bookmarks[0]?.id,
        },
      }
    : match(data)
        .with({ type: "ORIGINAL", user: P.not(P.nullish) }, () => ({
          create: {
            unionType: type,
            user: { connect: { id } },
            notifications: {
              create: {
                unionType: "Bookmark",
                user: { connect: { id } },
              },
            },
          },
        }))
        .otherwise(() => ({
          create: {
            unionType: type,
            user: { connect: { id } },
          },
        }));
};
