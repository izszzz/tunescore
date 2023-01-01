export const artistListQuery = {
  include: {
    bands: true,
    _count: {
      select: {
        bookmarks: true,
      },
    },
  },
};
