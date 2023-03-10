import type { NextRouter } from "next/router";

export const selectBandMutate = (id: string | undefined) => ({
    data: { band: { connect: { id } } },
  }),
  clearBandMutate = { data: { band: { disconnect: true } } },
  searchMutate = (
    router: NextRouter,
    name: "title" | "name",
    value: string
  ) => ({
    where: { [name]: { is: { [router.locale]: { contains: value } } } },
    take: 10,
  });
