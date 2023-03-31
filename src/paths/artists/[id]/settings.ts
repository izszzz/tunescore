export const selectArtistBand = (id: string) => ({
    data: {
      artist: { update: { bands: { connect: { id } } } },
    },
  }),
  removeArtistBand = (id: string) => ({
    data: {
      artist: { update: { bands: { disconnect: { id } } } },
    },
  });
