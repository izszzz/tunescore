import { TRPCError } from "@trpc/server";

import { musicListArgs } from "../../helpers/music";
import { getCurrentUserId } from "../../helpers/user";
import { publicProcedure, router } from "../trpc";


export const currentUserRouter = router({
  findManyCart: publicProcedure.query(async ({ ctx }) => {
    if (!ctx.session?.user)
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Please Sign In",
      });
    const { session } = ctx,
      cart = await ctx.prisma.cart.findMany({
        include: { music: musicListArgs(session) },
        where: { user: { id: getCurrentUserId(session) } },
      });
    return cart.map((cart) => cart.music);
  }),
  notification: publicProcedure.query(async ({ ctx }) => {
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
