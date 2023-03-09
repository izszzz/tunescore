export const selectArtists = (id: string | undefined) => ({
    data: { artists: { connect: { id } } },
  }),
  removeArtists = (id: string | undefined) => ({
    data: { artists: { disconnect: { id } } },
  }),
  selectTags = (id: string | undefined) => ({
    data: {
      tagMaps: {
        create: { tag: { connect: { id } }, unionType: "Music" as const },
      },
    },
  }),
  removeTags = (id: string, unionId: string) => ({
    data: {
      tagMaps: {
        delete: {
          unionId_tagId_unionType: {
            unionType: "Music" as const,
            unionId,
            tagId: id,
          },
        },
      },
    },
  });
