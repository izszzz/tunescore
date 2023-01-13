import { musicListQuery } from "../../../helpers/music";
import { getRouterId } from "../../../helpers/router";
import type { GetRouterArg } from "../../../helpers/router";
import type { Prisma } from "@prisma/client";
import type { MusicListQueryType } from "../../../helpers/music";
import type { SessionArg } from "../../../helpers/user";

export type UserRepositoriesGetPayload =
  Prisma.UserGetPayload<MusicListQueryType>;

export const userRepositoriesQuery = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: SessionArg;
}) => ({
  args: {
    ...musicListQuery(session),
    where: (router.query.q as string)
      ? {
          title: {
            is: {
              [router.locale as string]: {
                contains: (router.query.q as string) || "",
              },
            },
          },
          user: { id: getRouterId(router) },
        }
      : {
          user: { id: getRouterId(router) },
        },
  },
  options: { page: (router.query.page as string) || 0, perPage: 12 },
});
