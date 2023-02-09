import { musicListArgs } from "../../helpers/music";
import { getCurrentUserId } from "../../helpers/user";
import { router } from "../trpc";

import { shieldedProcedure } from "./shield";

export const currentUserRouter = router({
  findManyPurchase: shieldedProcedure.query(async ({ ctx }) => {
    const { session } = ctx;
    return ctx.prisma.purchase.findMany({
      include: { music: musicListArgs(session) },
      where: { user: { id: getCurrentUserId(session) } },
    });
  }),
  findManyCart: shieldedProcedure.query(async ({ ctx }) => {
    const { session } = ctx,
      cart = await ctx.prisma.cart.findMany({
        include: { music: musicListArgs(session) },
        where: { user: { id: getCurrentUserId(session) } },
      });
    return cart.map((cart) => cart.music);
  }),
  findManyNotification: shieldedProcedure.query(async ({ ctx }) => {
    const userId = getCurrentUserId(ctx.session);
    return ctx.prisma.notification.findMany({
      include: {
        bookmarked: {
          include: {
            music: true,
          },
        },
        user: true,
      },
      where: {
        OR: [
          {
            bookmarked: {
              music: {
                user: {
                  id: userId,
                },
              },
            },
          },
          {
            followed: {
              follower: {
                id: userId,
              },
            },
          },
          {
            commented: {
              issue: {
                id: userId,
              },
            },
          },
          {
            commented: {
              pull: {
                id: userId,
              },
            },
          },
        ],
      },
    });
  }),
});
