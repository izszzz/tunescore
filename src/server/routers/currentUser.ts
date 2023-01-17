import { TRPCError } from "@trpc/server";
import { musicListArgs } from "../../helpers/music";
import { getCurrentUserId } from "../../helpers/user";
import { router, publicProcedure } from "../trpc";

export const currentUserRouter = router({
  findManyCart: publicProcedure.query(async ({ ctx }) => {
    if (!ctx.session?.user)
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Please Sign In",
      });
    const { session } = ctx;
    const cart = await ctx.prisma.cart.findMany({
      where: { user: { id: getCurrentUserId(session) } },
      include: { music: musicListArgs(session) },
    });
    return cart.map((cart) => cart.music);
  }),
  notification: publicProcedure.query(async ({ ctx }) => {
    const userId = getCurrentUserId(ctx.session);
    return await ctx.prisma.notification.findMany({
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
      include: {
        bookmarked: {
          include: {
            music: true,
          },
        },
        user: true,
      },
    });
  }),
});
