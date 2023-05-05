import type { NextRouter } from "next/router";

import { followArgs } from "../../../helpers/follow";
export const followersQuery = ({
  router,
  perPage,
}: {
  router: NextRouter<"/users/[id]">;
  perPage: number;
}) => ({
  args: {
    where: { followerId: router.query.id },
    ...followArgs,
  },
  options: { page: router.query.page as string, perPage },
});
