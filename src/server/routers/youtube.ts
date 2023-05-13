import { z } from "zod";

import { limit } from "../../consts/external";
import { youtube } from "../common/youtube";
import { publicProcedure, router } from "../trpc";

const maxResults = limit / 2;
export const youtubeRouter = router({
  search: publicProcedure
    .input(
      z.object({
        term: z.string(),
        type: z.union([z.literal("video"), z.literal("channel")]),
      })
    )
    .query(({ input: { term, type } }) =>
      youtube.search
        .list({
          q: term,
          type: [type],
          part: ["snippet"],
          maxResults,
          ...(type === "video" ? { videoCategoryId: "10" } : {}),
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
              maxResults,
            })
            .then((data) => data.data)
        : null
    ),
  findUniqueChannel: publicProcedure
    .input(z.string().nullish())
    .query(({ input }) =>
      input
        ? youtube.channels
            .list({
              id: [input],
              part: ["snippet"],
              maxResults,
            })
            .then((data) => data.data)
        : null
    ),
});
