import type { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";

import { musicListArgs } from "../../../helpers/music";
import type { MusicListArgsType } from "../../../helpers/music";
import type { SessionArg } from "../../../helpers/user";
import { userWhere } from "../../../helpers/user";

export type UserRepositoriesGetPayload = Prisma.UserGetPayload<{
  include: { musics: MusicListArgsType };
}>;

export const userRepositoriesQuery = ({
  router,
  session,
}: {
  router: NextRouter;
  session: SessionArg;
}) => ({
  args: {
    ...musicListArgs(session),
    where: {
      type: "ORIGINAL" as const,
      ...((router.query.q as string)
        ? {
            title: {
              is: { [router.locale]: { contains: router.query.q as string } },
            },
          }
        : {}),
      user: userWhere(session),
    },
  },
  options: { page: (router.query.page as string) || 0 },
});
