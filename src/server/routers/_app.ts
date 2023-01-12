/**
 * This file contains the root router of your tRPC-backend
 */
import { mergeRouters, router } from "../trpc";
import { appRouter as generatedRouter } from "../../../prisma/generated/routers";
import { paginationRouter } from "./pagination";
import { searchRouter } from "./search";

export const appRouter = mergeRouters(
  t.router({
    })
,
  generatedRouter
);

export type AppRouter = typeof appRouter;
