import type { NextRouter } from "next/router";

import { followArgs } from "../../../helpers/follow";

export const followingPath = ({
  router,
  perPage,
}: {
  router: NextRouter<"/users/[id]">;
  perPage: number;
}) => ({
  args: {
    where: { followingId: router.query.id },
    ...followArgs,
  },
  options: { page: router.query.page as string, perPage },
});
