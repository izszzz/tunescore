import type { NextRouter } from "next/router";

import { followArgs } from "../../../helpers/follow";
export const followersQuery = ({
  router: {
    query: { id },
  },
}: {
  router: NextRouter<"/users/[id]">;
}) => ({
  args: {
    where: { followerId: id },
    ...followArgs,
  },
  options: { page: 0 },
});
