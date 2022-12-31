import { createPath } from "../../helpers/path";
import { GetRouterArg } from "../../helpers/router";
import {
  GetAuthenticateUserArg,
  getAuthenticateUserId,
} from "../../helpers/user";

export const musicPaginationPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetAuthenticateUserArg;
}) =>
  createPath([
    "pagination.music",
    {
      args: {
        include: {
          composers: true,
          lyrists: true,
          band: true,
          user: true,
          artists: true,
          bookmarks: {
            where: {
              user: { id: getAuthenticateUserId(session) },
              resourceType: "Music",
            },
          },
          _count: {
            select: {
              bookmarks: true,
            },
          },
        },
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
    },
  ]);
