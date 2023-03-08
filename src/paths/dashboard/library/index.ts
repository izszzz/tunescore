import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";

import { musicListArgs } from "../../../helpers/music";
import type { SessionArg } from "../../../helpers/user";

export const libraryPaginationQuery = ({
  router,
  session,
}: {
  router: NextRouter;
  session: SessionArg;
}) => ({
  args: Prisma.validator<Prisma.TransactionFindManyArgs>()({
    where: (router.query.q as string)
      ? {
          music: {
            title: {
              is: {
                [router.locale]: { contains: (router.query.q as string) || "" },
              },
            },
          },
        }
      : {},
    include: {
      music: musicListArgs(session),
    },
  }),
  options: { page: (router.query.page as string) || 0, perPage: 12 },
});
