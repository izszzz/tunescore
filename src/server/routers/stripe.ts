import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { authenticateUser } from "../../helpers/user";
import { stripe } from "../common/stripe";
import { router } from "../trpc";

import { shieldedProcedure } from "./shield";

export const stripeRouter = router({
  createSetupIntent: shieldedProcedure.mutation(
    async ({ ctx }) =>
      await stripe.setupIntents
        .create({
          customer: ctx.session?.user?.stripeCustomerId,
          payment_method_types: ["card"],
        })
        .then((data) => data)
  ),
  cancelSetupIntent: shieldedProcedure
    .input(z.string())
    .mutation(
      async ({ input }) =>
        await stripe.setupIntents.cancel(input).then((data) => data)
    ),
  paymentMethods: shieldedProcedure.query(async ({ ctx }) => {
    const user = authenticateUser(ctx.session);
    return await stripe.customers
      .listPaymentMethods(user.stripeCustomerId)
      .then(({ data }) => data);
  }),
  paymentIntent: shieldedProcedure
    .input(z.string().nullish())
    .query(async ({ input }) => {
      if (!input) return null;
      return await stripe.paymentIntents.retrieve(input).then((data) => data);
    }),
  createPaymentIntent: shieldedProcedure
    .input(z.string())
    .mutation(async ({ ctx: { session, prisma }, input }) => {
      const user = authenticateUser(session),
        paymentMethod = await stripe.paymentMethods.retrieve(input),
        carts = await prisma.cart.findMany({
          where: {
            user: { id: user.id },
          },
          include: {
            music: { include: { user: true } },
          },
        });

      carts.forEach(async (cart) => {
        try {
          const { music } = cart;
          const price = music.price;
          if (!price) throw "Not Valid Price";
          const data = await stripe.paymentIntents.create({
            amount: price,
            currency: "jpy",
            customer: user.stripeCustomerId,
            payment_method: paymentMethod.id,
            metadata: {
              musicId: cart.music.id,
            },
          });

          // delete cart
          await prisma.cart.delete({ where: { id: cart.id } });

          // add purchase
          await prisma.transaction.create({
            data: {
              type: "PURCHASE",
              amount: price,
              music: { connect: { id: music.id } },
              user: { connect: { id: user.id } },
              stripePaymentIntentId: data.id,
            },
          });

          // add point
          // sender user
          const prismaUser = await prisma.user.findUnique({
            where: { id: user.id },
          });
          if (!prismaUser) throw "Not found CurrentUser";
          // TODO: 購入ポイント
          // await prisma.user.update({
          //   where: { id: user.id },
          //   data: { point: prismaUser.point - price },
          // });
          // recipient user
          if (music.user?.id)
            await prisma.user.update({
              where: { id: music.user.id },
              data: { point: music.user.point + price },
            });
          return data;
        } catch (err) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            cause: err,
          });
        }
      });
    }),
});
