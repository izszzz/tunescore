// src/server/router/index.ts
import {createRouter} from "./context"
import superjson from "superjson"

import {exampleRouter} from "./example"
import {protectedExampleRouter} from "./protected-example-router"
import {userRouter} from "./user"
import {musicRouter} from "./music"
import {artistRouter} from "./artist"
import {bandRouter} from "./band"
import {issueRouter} from "./issue"
import {pullRouter} from "./pull"
import {albumRouter} from "./album"

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
  .merge("auth.", protectedExampleRouter)

// export type definition of API
export type AppRouter = typeof appRouter
