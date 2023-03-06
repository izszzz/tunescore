import type { NextRouter } from "next/router";

import { followArgs } from "../../../helpers/follow";

export const followingPath = ({
  router: {
    query: { id },
  },
}: {
  router: NextRouter<"/users/[id]">;
}) => ({
  args: {
    where: { followingId: id },
    ...followArgs,
  },
  options: { page: 0, perPage: 12 },
});
