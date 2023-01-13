import { bookmarkQuery } from "./bookmark";
import type { SessionArg } from "./user";

export type BandListQueryType = {
  include: {
    bookmarks: true;
    _count: {
      select: {
        bookmarks: true;
        artists: true;
        musics: true;
        albums: true;
      };
    };
  };
};
export const bandListQuery = (session: SessionArg) => ({
  include: {
    bookmarks: bookmarkQuery({ type: "Band", session }),
    _count: {
      select: {
        bookmarks: true,
        artists: true,
        musics: true,
        albums: true,
      },
    },
  },
});
