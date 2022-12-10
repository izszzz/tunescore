// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";
import { userRouter } from "./user";
import { artistRouter } from "./artist";
import { bandRouter } from "./band";
import { issueRouter } from "./issue";
import { pullRouter } from "./pull";
import { albumRouter } from "./album";
import { musicRouter } from "../../../prisma/generated/routers/Music.router";
import { bookmarkedRouter } from "./bookmarked";
import { paginationRouter } from "./pagination";
import { searchRouter } from "./search";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("user.", userRouter)
  .merge("music.", musicRouter)
  .merge("artist.", artistRouter)
  .merge("band.", bandRouter)
  .merge("album.", albumRouter)
  .merge("issue.", issueRouter)
  .merge("pull.", pullRouter)
  .merge("pagination.", paginationRouter)
  .merge("bookmarked.", bookmarkedRouter)
  .merge("search.", searchRouter)
  .merge("auth.", protectedExampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
