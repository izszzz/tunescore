// src/server/router/index.ts
import superjson from "superjson";

import { usersRouter } from "../../../prisma/generated/routers/User.router";
import { pullsRouter } from "../../../prisma/generated/routers/Pull.router";
import { issuesRouter } from "../../../prisma/generated/routers/Issue.router";
import { albumsRouter } from "../../../prisma/generated/routers/Album.router";
import { musicRouter } from "../../../prisma/generated/routers/Music.router";
import { artistsRouter } from "../../../prisma/generated/routers/Artist.router";
import { bandsRouter } from "../../../prisma/generated/routers/Band.router";
import { votesRouter } from "../../../prisma/generated/routers/Vote.router";
import { protectedExampleRouter } from "./protected-example-router";
import { createRouter } from "./context";
import { bookmarkedRouter } from "./bookmarked";
import { paginationRouter } from "./pagination";
import { searchRouter } from "./search";
import { commentsRouter } from "../../../prisma/generated/routers/Comment.router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("user.", usersRouter)
  .merge("music.", musicRouter)
  .merge("artist.", artistsRouter)
  .merge("band.", bandsRouter)
  .merge("album.", albumsRouter)
  .merge("issue.", issuesRouter)
  .merge("pull.", pullsRouter)
  .merge("comment.", commentsRouter)
  .merge("vote.", votesRouter)
  .merge("pagination.", paginationRouter)
  .merge("search.", searchRouter)
  .merge("auth.", protectedExampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
