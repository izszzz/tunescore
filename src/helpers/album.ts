import { bandListQuery } from "./band";
import { bookmarkQuery } from "./bookmark";
import type { GetCurrentUserArg } from "./user";

export type AlbumListQueryType = {
  include: {
    band: true;
    bookmarks: true;
    _count: { select: { bookmarks: true; artists: true; musics: true } };
  };
};
export const albumListQuery = (session: GetCurrentUserArg) => ({
  include: {
    _count: { select: { bookmarks: true, artists: true, musics: true } },
    band: bandListQuery(session),
    bookmarks: bookmarkQuery({ type: "Album", session }),
  },
});
