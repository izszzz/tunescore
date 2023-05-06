import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";

import { musicListArgs } from "../../../helpers/music";
import type { SessionArg } from "../../../helpers/user";
import type { WithPerPage } from "../../../types";

export const libraryPaginationQuery = ({
  router,
  session,
  perPage,
}: WithPerPage<{
  router: NextRouter;
  session: SessionArg;
}>) => ({
  args: Prisma.validator<Prisma.TransactionFindManyArgs>()({
    where: (router.query.q as string)
      ? {
          music: {
            resource: {
              name: {
                is: {
                  [router.locale]: {
                    contains: (router.query.q as string) || "",
                  },
                },
              },
            },
          },
        }
      : {},
    include: {
      music: musicListArgs(session),
    },
  }),
  options: { page: router.query.page as string, perPage },
});
