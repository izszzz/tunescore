/**
 * This file contains the root router of your tRPC-backend
 */
import { appRouter as generatedRouter } from "../../../prisma/generated/routers";
import { mergeRouters, router } from "../trpc";

import { currentUserRouter } from "./currentUser";
import { paginationRouter } from "./pagination";
import { searchRouter } from "./search";
import { stripeRouter } from "./stripe";

export const appRouter = mergeRouters(
  router({
    pagination: paginationRouter,
    search: searchRouter,
    currentUser: currentUserRouter,
    stripe: stripeRouter,
  }),
  generatedRouter
);

export type AppRouter = typeof appRouter;
