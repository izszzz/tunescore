export const selectBandMutate = (id: string | undefined) => ({
    data: { band: { connect: { id } } },
  }),
  clearBandMutate = { data: { band: { disconnect: true } } };
