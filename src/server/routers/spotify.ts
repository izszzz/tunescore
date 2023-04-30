import { z } from "zod";

import { authorized } from "../../helpers/spotify";
import { Linker } from "../../utils/linker";
import { publicProcedure, router } from "../trpc";

const linker = new Linker();
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
    .query(async ({ ctx: { session, prisma }, input }) => {
      const spotify = await authorized(session),
        data = await spotify
          .searchTracks(input)
          .then(({ body }) => body.tracks);
      if (!data) return null;
      linker.searchedSpotifyTracks(prisma, spotify, data);
      return data;
    }),
  findUniqueTrack: publicProcedure
    .input(z.string().nullish())
    .query(async ({ ctx, input }) => {
      const spotify = await authorized(ctx.session);
      return input ? spotify.getTrack(input).then(({ body }) => body) : null;
    }),
  searchArtists: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const spotify = await authorized(ctx.session);
      return spotify.searchArtists(input).then(({ body }) => body.artists);
    }),
  findUniqueArtist: publicProcedure
    .input(z.string().nullish())
    .query(async ({ ctx, input }) => {
      const spotify = await authorized(ctx.session);
      return input ? spotify.getArtist(input).then(({ body }) => body) : null;
    }),
  searchAlbums: publicProcedure
    .input(z.string())
    .query(async ({ ctx: { session, prisma }, input }) => {
      const spotify = await authorized(session),
        ids = await spotify
          .searchAlbums(input)
          .then(({ body }) => body.albums?.items.map(({ id }) => id));
      if (!ids) return null;
      const data = await spotify.getAlbums(ids).then(({ body }) => body.albums);
      linker.searchedSpotifyAlbums(prisma, spotify, data);
      return data;
    }),
  findUniqueAlbum: publicProcedure
    .input(z.string().nullish())
    .query(async ({ ctx: { session, prisma }, input }) => {
      if (!input) return null;
      const spotify = await authorized(session),
        data = await spotify.getAlbum(input).then(({ body }) => body);
      linker.findedUniqueSpotifyAlbum(prisma, spotify, data);
      return data;
    }),
});
