import { z } from "zod";

import { youtube } from "../common/youtube";
import { publicProcedure, router } from "../trpc";

export const youtubeRouter = router({
  search: publicProcedure
    .input(z.object({ term: z.string(), type: z.string() }))
    .query(({ input: { term, type } }) =>
      youtube.search
        .list({
          q: term,
          type: [type],
          part: ["snippet"],
          videoCategoryId: "10",
          maxResults: 6,
        })
        .then((data) => data.data)
    ),
  findUniqueVideo: publicProcedure
    .input(z.string().nullish())
    .query(({ input }) =>
      input
        ? youtube.videos
            .list({
              id: [input],
              part: ["snippet"],
              videoCategoryId: "10",
              maxResults: 6,
            })
            .then((data) => data.data)
        : null
    ),
  channel: publicProcedure.input(z.string().nullish()).query(({ input }) =>
    input
      ? youtube.channels
          .list({
            id: [input],
            part: ["snippet"],
            maxResults: 6,
          })
          .then((data) => data.data)
      : null
  ),
});
