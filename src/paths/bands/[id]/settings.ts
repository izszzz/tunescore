export const selectArtists = (id: string | undefined) => ({
    data: { artists: { connect: { id } } },
  }),
  removeArtists = (id: string | undefined) => ({
    data: { artists: { disconnect: { id } } },
  }),
  selectTags = (id: string | undefined) => ({
    tagMaps: { create: { tag: { connect: { id } } } },
  }),
  removeTags = (id: string, resourceId: string) => ({
    tagMaps: { delete: { tagId_resourceId: { resourceId, tagId: id } } },
  }),
  selectRole = (id: string) => ({
    roleMaps: { create: { role: { connect: { id } } } },
  }),
  removeRole = (id: string, resourceId: string) => ({
    roleMaps: { delete: { roleId_resourceId: { resourceId, roleId: id } } },
  });
