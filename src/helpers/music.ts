import setLocale from "./setLocale";
import type { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";
import { bookmarkQuery } from "./bookmark";
import { GetCurrentUserArg } from "./user";
type Data = Prisma.MusicGetPayload<{
  include: {
    artists: true;
    band: true;
    composers: true;
    lyrists: true;
    user: true;
  };
}>;
export const getOwner = (data: Data, router: NextRouter) => {
  if (data.type === "ORIGINAL" && data.user)
    return {
      type: "user" as const,
      owner: { id: data.user.id, name: data.user.name },
    };
  else {
    if (data.band) {
      const { band } = data;
      return {
        type: "band" as const,
        owner: { id: band.id, name: setLocale(band.name, router) },
      };
    }
    if (data.composers[0])
      return {
        type: "composer" as const,
        owner: {
          id: data.composers[0].id,
          name: setLocale(data.composers[0].name, router),
        },
      };
    if (data.lyrists[0])
      return {
        type: "lyrist" as const,
        owner: {
          id: data.lyrists[0].id,
          name: setLocale(data.lyrists[0].name, router),
        },
      };
    if (data.artists[0])
      return {
        type: "artist" as const,
        owner: {
          id: data.artists[0].id,
          name: setLocale(data.artists[0].name, router),
        },
      };
    return { type: "none", owner: null };
  }
};

export const musicListQuery = (session: GetCurrentUserArg) => ({
  include: {
    composers: true,
    lyrists: true,
    band: true,
    user: true,
    artists: true,
    bookmarks: bookmarkQuery({ type: "Music", session }),
    _count: {
      select: {
        bookmarks: true,
      },
    },
  },
});
