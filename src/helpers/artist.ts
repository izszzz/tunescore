import { bookmarkQuery } from "./bookmark";
import type { GetCurrentUserArg } from "./user";

export type ArtistListQueryType = {
  include: {
    bands: true;
    bookmarks: true;
    _count: {
      select: {
        bookmarks: true;
      };
    };
  };
};
export const artistListQuery = (session: GetCurrentUserArg) => ({
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
