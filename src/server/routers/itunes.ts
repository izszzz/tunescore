import { z } from "zod";

import { Linker } from "../../utils/linker";
import { itunes } from "../common/itunes";
import { publicProcedure, router } from "../trpc";

const linker = new Linker();
const getItunesId = (url: string) => new URL(url).pathname.split("/")[4];
export const itunesRouter = router({
  searchMusics: publicProcedure
    .input(z.string())
    .query(async ({ ctx: { prisma }, input }) => {
      const data = await (
        await itunes.searchMusics({
          term: input,
          limit: 12,
          offset: 0,
        })
      ).data;
      linker.createGenresByItunes(prisma, data);
      return data;
    }),
  findUniqueMusic: publicProcedure
    .input(z.string().nullish())
    .query(async ({ input }) => {
      if (!input) return null;
      const id = getItunesId(input);
      if (!id) return null;
      return await (
        await itunes.lookupMusic({ id })
      ).data;
    }),
  searchArtists: publicProcedure
    .input(z.string())
    .query(async ({ ctx: { prisma }, input }) => {
      const data = await (
        await itunes.searchArtists({
          term: input,
          limit: 12,
          offset: 0,
        })
      ).data;
      linker.createGenresByItunes(prisma, data);
      return data;
    }),
  findUniqueArtist: publicProcedure
    .input(z.string().nullish())
    .query(async ({ input }) => {
      if (!input) return null;
      const id = getItunesId(input);
      if (!id) return null;
      return await (
        await itunes.lookupArtist({ id })
      ).data;
    }),
  searchAlbums: publicProcedure
    .input(z.string())
    .query(async ({ ctx: { prisma }, input }) => {
      const data = await (
        await itunes.searchAlbums({
          term: input,
          limit: 12,
          offset: 0,
        })
      ).data;
      linker.createGenresByItunes(prisma, data);
      return data;
    }),
  findUniqueAlbum: publicProcedure
    .input(z.string().nullish())
    .query(async ({ input }) => {
      if (!input) return null;
      const id = getItunesId(input);
      if (!id) return null;
      return await (
        await itunes.lookupAlbum({ id })
      ).data;
    }),
});
