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
});
