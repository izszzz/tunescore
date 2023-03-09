export const selectBands = (id: string | undefined) => ({
    data: { bands: { connect: { id } } },
  }),
  removeBands = (id: string | undefined) => ({
    data: { bands: { disconnect: { id } } },
  });
