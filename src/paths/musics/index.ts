import type { NextRouter } from "next/router";

import { musicListArgs } from "../../helpers/music";
import type { SessionArg } from "../../helpers/user";

export const musicPaginationQuery = ({
  router,
  session,
}: {
  router: NextRouter;
  session: SessionArg;
}) => ({
  args: {
    ...musicListArgs(session),
    where: (router.query.q as string)
      ? {
          title: {
            is: {
              [router.locale as string]: {
                contains: (router.query.q as string) || "",
              },
            },
          },
        }
      : {},
  },
  options: { page: (router.query.page as string) || 0, perPage: 12 },
});
