import { bookmarkQuery } from "./bookmark";
import type { SessionArg } from "./user";

export type ArtistListArgsType = ReturnType<typeof artistListArgs>;
export const artistListArgs = (session: SessionArg) => ({
  include: {
    bands: true,
    bookmarks: bookmarkQuery({ type: "Artist", session }),
    _count: {
      select: {
        bookmarks: true,
      },
    },
  },
});
