import { z } from "zod";
import { authenticateUser } from "../../helpers/user";
import { stripe } from "../common/stripe";
import { router, publicProcedure } from "../trpc";

export const stripeRouter = router({
  setupIntents: publicProcedure.query(async ({ ctx }) => {
    const user = authenticateUser(ctx.session);
    return await stripe.setupIntents
      .list({
        customer: user.stripeCustomerId,
      })
      .then(({ data }) => data);
  }),
  createSetupIntent: publicProcedure.mutation(async ({ ctx }) => {
    const user = authenticateUser(ctx.session);
    return await stripe.setupIntents
      .create({
        customer: user.stripeCustomerId,
        payment_method_types: ["card"],
      })
      .then((data) => data);
  }),
  cancelSetupIntent: publicProcedure
    .input(z.string())
    .mutation(
      async ({ input }) =>
        await stripe.setupIntents.cancel(input).then((data) => data)
    ),
  paymentMethods: publicProcedure.query(async ({ ctx }) => {
    const user = authenticateUser(ctx.session);
    return await stripe.customers
      .listPaymentMethods(user.stripeCustomerId)
      .then(({ data }) => data);
  }),
  createPaymentIntent: publicProcedure
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
        }),
        musics = carts.map((cart) => cart.music),
        sum = musics.reduce((sum, music) => sum + (music.price || 0), 0);

      carts.forEach(async (cart) => {
        try {
          const data = await stripe.paymentIntents.create({
            amount: sum,
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
          await prisma.purchase.create({
            data: {
              music: { connect: { id: cart.music.id } },
              user: { connect: { id: user.id } },
              stripePaymentIntentId: data.id,
            },
          });

          // add point
          if (cart.music.user)
            await prisma.point.create({
              data: {
                amount: cart.music.price || 0,
                actionType: "PURCHASE",
                user: { connect: { id: cart.music.user.id } },
              },
            });
          return data;
        } catch (err) {
          return err;
        }
      });
    }),
});
