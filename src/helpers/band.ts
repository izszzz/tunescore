export const bandListQuery = {
  include: {
    _count: {
      select: {
        bookmarks: true,
        artists: true,
        musics: true,
        albums: true,
      },
    },
  },
};
