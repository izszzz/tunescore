/**
 * This file contains the root router of your tRPC-backend
 */
import { mergeRouters, router } from "../trpc";
import { appRouter as generatedRouter } from "../../../prisma/generated/routers";
import { paginationRouter } from "./pagination";
import { searchRouter } from "./search";
import { currentUserRouter } from "./currentUser";
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
