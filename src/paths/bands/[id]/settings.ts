export const selectArtists = (id: string | undefined) => ({
    data: { band: { update: { artists: { connect: { id } } } } },
  }),
  removeArtists = (id: string | undefined) => ({
    data: { band: { update: { artists: { disconnect: { id } } } } },
  }),
  selectTag = (id: string) => ({ data: { genres: { connect: { id } } } }),
  removeTag = (id: string) => ({ data: { genres: { disconnect: { id } } } }),
  selectRole = (id: string, participationId: string) => ({
    data: {
      music: {
        update: {
          participations: {
            update: {
              where: { id: participationId },
              data: { roles: { connect: { id } } },
            },
          },
        },
      },
    },
  }),
  removeRole = (id: string, participationId: string) => ({
    data: {
      music: {
        update: {
          participations: {
            update: {
              where: { id: participationId },
              data: { roles: { disconnect: { id } } },
            },
          },
        },
      },
    },
  });
