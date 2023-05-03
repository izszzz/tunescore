import type { ResourceUnionType } from "@prisma/client";
import type { NextRouter } from "next/router";

import { resourceListArgs } from "../helpers/resource";
import type { SessionArg } from "../helpers/user";

export const resourcePaginationQuery = ({
  router,
  session,
}: {
  router: NextRouter;
  session: SessionArg;
}) => ({
  args: {
    ...resourceListArgs(session),
    where: {
      name: {
        is: {
          [router.locale]: {
            contains: (router.query.q as string | undefined) || "",
          },
        },
      },
      ...(router.query.type && {
        unionType: {
          in: (Array.isArray(router.query.type)
            ? router.query.type
            : [router.query.type]) as ResourceUnionType[],
        },
      }),
    },
  },
  options: { page: router.query.page as string },
});
