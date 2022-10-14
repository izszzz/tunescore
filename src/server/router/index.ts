// src/server/router/index.ts
import {createRouter} from "./context"
import superjson from "superjson"

import {exampleRouter} from "./example"
import {protectedExampleRouter} from "./protected-example-router"
import {userRouter} from "./user"
import {musicRouter} from "./music"
import {artistRouter} from "./artist"
import {bandRouter} from "./band"
import {musicsOnComposersRouter} from "./musics_on_composers"
import {musicsOnLyristsRouter} from "./musics_on_lyrists"
import {musicsOnArtistsRouter} from "./musics_on_artists"

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("user.", userRouter)
  .merge("music.", musicRouter)
  .merge("artist.", artistRouter)
  .merge("band.", bandRouter)
  .merge("musicsOnComposers.", musicsOnComposersRouter)
  .merge("musicsOnLyrists.", musicsOnLyristsRouter)
  .merge("musicsOnArtists.", musicsOnArtistsRouter)
  .merge("auth.", protectedExampleRouter)

// export type definition of API
export type AppRouter = typeof appRouter
