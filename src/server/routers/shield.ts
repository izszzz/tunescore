import { rule, shield } from "trpc-shield";

import type { Context } from "../context";
import { middleware, publicProcedure } from "../trpc";

const isAuthenticated = rule<Context>()(async (ctx) => !!ctx.session?.user);

const permissions = shield<Context>({
  stripe: {
    query: {
      createSetupIntent: isAuthenticated,
      cancelSetupIntent: isAuthenticated,
      paymentMethods: isAuthenticated,
      createPaymentIntent: isAuthenticated,
    },
  },
  currentUser: {
    query: {
      findManyCart: isAuthenticated,
      notification: isAuthenticated,
    },
  },
});

export const permissionsMiddleware = middleware(permissions);

export const shieldedProcedure = publicProcedure.use(permissionsMiddleware);
