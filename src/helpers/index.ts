import type { NextRouter } from "next/router";

import { env } from "../env/client.mjs";

export const selectBandMutate = (id: string | undefined) => ({
    data: { band: { connect: { id } } },
  }),
  clearBandMutate = { data: { band: { disconnect: true } } },
  searchMutate = (router: NextRouter, value: string) => ({
    where: {
      resource: { name: { is: { [router.locale]: { contains: value } } } },
    },
    take: Number(env.NEXT_PUBLIC_DEFAULT_SEARCH_TAKE),
  });
