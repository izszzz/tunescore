import { z } from "zod";

import { authorized } from "../../helpers/spotify";
import { publicProcedure, router } from "../trpc";

export const spotifyRouter = router({
  search: publicProcedure
    .input(
      z.object({
        term: z.string(),
        type: z
          .union([
            z.literal("album"),
            z.literal("artist"),
            z.literal("playlist"),
            z.literal("track"),
            z.literal("show"),
            z.literal("episode"),
          ])
          .array(),
      })
    )
    .query(async ({ ctx, input: { term, type } }) => {
      const spotify = await authorized(ctx.session);
      return spotify.search(term, type).then(({ body }) => {
        const keys = Object.keys(body);
        return body[keys[0] as keyof SpotifyApi.SearchResponse];
      });
    }),
  searchTracks: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const spotify = await authorized(ctx.session);
      return spotify.searchTracks(input).then(({ body }) => {
        const keys = Object.keys(body);
        return body[keys[0] as keyof SpotifyApi.SearchResponse];
      });
    }),
  findUniqueTrack: publicProcedure
    .input(z.string().nullish())
    .query(async ({ ctx, input }) => {
      const spotify = await authorized(ctx.session);
      return input
        ? spotify.getTrack(input).then(({ body }) => body)
        : undefined;
    }),
  searchArtists: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const spotify = await authorized(ctx.session);
      return spotify.searchArtists(input).then(({ body }) => {
        const keys = Object.keys(body);
        return body[keys[0] as keyof SpotifyApi.SearchResponse];
      });
    }),
  findUniqueArtist: publicProcedure
    .input(z.string().nullish())
    .query(async ({ ctx, input }) => {
      const spotify = await authorized(ctx.session);
      return input
        ? spotify.getArtist(input).then(({ body }) => body)
        : undefined;
    }),
});
