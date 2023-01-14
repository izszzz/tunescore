import { TRPCError } from "@trpc/server";
import { musicListArgs } from "../../helpers/music";
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
      where: { user: { id: session?.user?.id } },
      include: { music: musicListArgs(session) },
    });
    return cart.map((cart) => cart.music);
  }),
});
