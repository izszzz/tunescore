import { z } from "zod";

import { UserUpdateInputObjectSchema } from "../../../prisma/generated/schemas";
import { musicListArgs } from "../../helpers/music";
import { userArgs, getCurrentUserId, userWhere } from "../../helpers/user";
import { router } from "../trpc";

import { shieldedProcedure } from "./shield";

export const currentUserRouter = router({
  findCurrentUser: shieldedProcedure.query(
    async ({ ctx: { session, prisma } }) =>
      await prisma.user.findUnique({ where: userWhere(session) })
  ),
  updateCurrentUser: shieldedProcedure
    .input(UserUpdateInputObjectSchema)
    .mutation(
      async ({ ctx: { session, prisma }, input }) =>
        await prisma.user.update({ where: userWhere(session), data: input })
    ),
  deleteCurrentUser: shieldedProcedure.mutation(
    async ({ ctx: { session, prisma } }) =>
      await prisma.user.delete({ where: userWhere(session) })
  ),
  findUniqueTransaction: shieldedProcedure
    .input(z.string())
    .query(async ({ ctx: { prisma, session }, input }) =>
      prisma.transaction.findUnique({
        include: { music: musicListArgs(session), user: userArgs },
        where: { id: input },
      })
    ),
  findManyCart: shieldedProcedure.query(
    async ({ ctx: { session, prisma } }) => {
      const cart = await prisma.cart.findMany({
        include: { music: musicListArgs(session) },
        where: { user: userWhere(session) },
      });
      return cart.map((cart) => cart.music);
    }
  ),
  findManyNotification: shieldedProcedure.query(async ({ ctx }) => {
    const id = getCurrentUserId(ctx.session);
    return ctx.prisma.notification.findMany({
      include: { bookmarked: { include: { music: true } }, user: userArgs },
      where: {
        OR: [
          { bookmarked: { music: { user: { id } } } },
          { followed: { follower: { id } } },
          { commented: { issue: { id } } },
          { commented: { pull: { id } } },
        ],
      },
    });
  }),
});
