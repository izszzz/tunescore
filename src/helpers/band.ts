import { bookmarkQuery } from "./bookmark";
import { GetCurrentUserArg } from "./user";

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
export const bandListQuery = (session: GetCurrentUserArg) => ({
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
