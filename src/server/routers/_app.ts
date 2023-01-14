/**
 * This file contains the root router of your tRPC-backend
 */
import { mergeRouters, router } from "../trpc";
import { appRouter as generatedRouter } from "../../../prisma/generated/routers";
import { paginationRouter } from "./pagination";
import { searchRouter } from "./search";
import { currentUserRouter } from "./currentUser";

export const appRouter = mergeRouters(
  router({
    pagination: paginationRouter,
    search: searchRouter,
    currentUser: currentUserRouter,
  }),
  generatedRouter
);

export type AppRouter = typeof appRouter;
