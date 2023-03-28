export const selectArtists = (id: string | undefined) => ({
    data: { artists: { connect: { id } } },
  }),
  removeArtists = (id: string | undefined) => ({
    data: { artists: { disconnect: { id } } },
  }),
  selectTags = (id: string | undefined) => ({
    data: {
      resource: {
        update: { tag: { connect: { id } } },
      },
    },
  }),
  removeTags = (id: string) => ({
    data: {
      resource: {
        update: {
          tags: { disconnect: { id } },
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
