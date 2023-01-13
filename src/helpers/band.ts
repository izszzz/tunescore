import { bookmarkQuery } from "./bookmark";
import type { SessionArg } from "./user";

export type BandListArgsType = ReturnType<typeof bandListArgs>;
export const bandListArgs = (session: SessionArg) => ({
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
