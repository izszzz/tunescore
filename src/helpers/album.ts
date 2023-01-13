import { match, P } from "ts-pattern";
import setLocale from "./locale";
import { bandListQuery } from "./band";
import { bookmarkQuery } from "./bookmark";
import type { NextRouter } from "next/router";
import type { SessionArg } from "./user";
import type { Prisma } from "@prisma/client";

export type AlbumListQueryType = {
  include: {
    band: true;
    artists: true;
    bookmarks: true;
    _count: { select: { bookmarks: true; artists: true; musics: true } };
  };
};
export const albumListQuery = (session: SessionArg) => ({
  include: {
    _count: { select: { bookmarks: true, artists: true, musics: true } },
    band: bandListQuery(session),
    bookmarks: bookmarkQuery({ type: "Album", session }),
  },
});

type Data = Prisma.AlbumGetPayload<AlbumListQueryType>;

export const getAlbumOwner = (data: Data, router: NextRouter) =>
  match(data)
    .with({ band: P.select(P.not(P.nullish)) }, (band) => ({
      type: "BAND" as const,
      owner: {
        id: band.id,
        name: setLocale(band.name, router),
      },
    }))
    .with(
      {
        artists: P.select(P.not(P.nullish)),
      },
      (artists) =>
        artists[0]
          ? {
              type: "ARTIST" as const,
              owner: {
                id: artists[0]?.id,
                name: setLocale(artists[0]?.name, router),
              },
            }
          : {
              type: "ARTIST" as const,
              owner: null,
            }
    )
    .otherwise(() => ({
      type: "NONE" as const,
      owner: null,
    }));
