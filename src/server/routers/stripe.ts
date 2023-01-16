import { z } from "zod";
import { AuthenticateUser } from "../../helpers/user";
import { stripe } from "../common/stripe";
import { router, publicProcedure } from "../trpc";

export const stripeRouter = router({
  setupIntents: publicProcedure.query(async ({ ctx }) => {
    const user = AuthenticateUser(ctx.session);
    return await stripe.setupIntents
      .list({
        customer: user.stripeCustomerId,
      })
      .then(({ data }) => data);
  }),
  createSetupIntent: publicProcedure.mutation(async ({ ctx }) => {
    const user = AuthenticateUser(ctx.session);
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
    const user = AuthenticateUser(ctx.session);
    return await stripe.customers
      .listPaymentMethods(user.stripeCustomerId)
      .then(({ data }) => data);
  }),
  createPaymentIntent: publicProcedure
    .input(
      z.object({
        amount: z.number(),
        paymentMethodId: z.string(),
        musicIds: z.array(z.string()),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { amount, paymentMethodId, musicIds } = input,
        user = AuthenticateUser(ctx.session),
        paymentMethod = await stripe.paymentMethods.retrieve(paymentMethodId);
      return await musicIds.map(
        async (musicId) =>
          await stripe.paymentIntents
            .create({
              amount,
              currency: "jpy",
              customer: user.stripeCustomerId,
              payment_method: paymentMethod.id,
              metadata: {
                musicId,
              },
            })
            .then((data) => {
              // delete cart
              ctx.prisma.cart.delete({ where: { id: musicId } });
              // add purchase
              ctx.prisma.purchase.create({
                data: {
                  music: { connect: { id: musicId } },
                  user: { connect: { id: user.id } },
                  stripePaymentIntentId: data.id,
                },
              });
              return data;
            })
            .catch((err) => err)
      );
    }),
});
