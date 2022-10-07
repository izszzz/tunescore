// src/server/router/index.ts
import {createRouter} from "./context"
import superjson from "superjson"

import {exampleRouter} from "./example"
import {protectedExampleRouter} from "./protected-example-router"
import {userRouter} from "./user"
import {musicRouter} from "./music"

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("user.", userRouter)
  .merge("music.", musicRouter)
  .merge("auth.", protectedExampleRouter)

// export type definition of API
export type AppRouter = typeof appRouter
