/**
 * This file contains the root router of your tRPC-backend
 */
import { appRouter as generatedRouter } from "../../../prisma/generated/routers";
import { mergeRouters, router } from "../trpc";

import { currentUserRouter } from "./currentUser";
import { paginationRouter } from "./pagination";
import { searchRouter } from "./search";
import { spotifyRouter } from "./spotify";
import { stripeRouter } from "./stripe";
import { youtubeRouter } from "./youtube";

export const appRouter = mergeRouters(
  router({
    pagination: paginationRouter,
    search: searchRouter,
    currentUser: currentUserRouter,
    stripe: stripeRouter,
    youtube: youtubeRouter,
    spotify: spotifyRouter,
  }),
  generatedRouter
);

export type AppRouter = typeof appRouter;
