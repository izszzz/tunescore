export const selectArtists = (id: string | undefined) => ({
    data: { artists: { connect: { id } } },
  }),
  removeArtists = (id: string | undefined) => ({
    data: { artists: { disconnect: { id } } },
  }),
  selectTags = (id: string | undefined) => ({
    data: {
      resource: {
        update: { tagMaps: { create: { tag: { connect: { id } } } } },
      },
    },
  }),
  removeTags = (id: string, resourceId: string) => ({
    data: {
      resource: {
        update: {
          tagMaps: { delete: { tagId_resourceId: { resourceId, tagId: id } } },
        },
      },
    },
  }),
  selectRole = (id: string) => ({
    data: {
      resource: {
        update: { roleMaps: { create: { role: { connect: { id } } } } },
      },
    },
  }),
  removeRole = (id: string, resourceId: string) => ({
    data: {
      resource: {
        update: {
          roleMaps: {
            delete: { roleId_resourceId: { resourceId, roleId: id } },
          },
        },
      },
    },
  });
