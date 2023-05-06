import { z } from "zod";

import { limit } from "../../consts/external";
import { Linker } from "../../utils/linker";
import { itunes } from "../common/itunes";
import { publicProcedure, router } from "../trpc";

const linker = new Linker(),
  lang = z.union([z.literal("ja_jp"), z.literal("en_us")]),
  searchInput = z.object({ term: z.string(), lang }),
  findUniqueInput = z.object({ id: z.string().nullish(), lang }),
  baseParams = { limit, offset: 0 },
  getItunesId = (url: string) => new URL(url).pathname.split("/")[4],
  getItunesTrackId = (url: string) => new URL(url).searchParams.get("i");
export const itunesRouter = router({
  searchMusics: publicProcedure.input(searchInput).query(async ({ input }) => {
    const { data } = await itunes.searchMusics({
      ...input,
      ...baseParams,
    });
    linker.createGenresByItunes(data);
    return data;
  }),
  findUniqueMusic: publicProcedure
    .input(findUniqueInput)
    .query(async ({ input: { id, lang } }) => {
      if (!id) return null;
      id = getItunesTrackId(id);
      if (!id) return null;
      const { data } = await itunes.lookupMusic({ id, lang }),
        result = data.results[0];
      if (result)
        linker.findedUniqueItunes(result.trackViewUrl, result.trackName, lang);
      return data;
    }),
  searchArtists: publicProcedure.input(searchInput).query(async ({ input }) => {
    const { data } = await itunes.searchArtists({
      ...input,
      ...baseParams,
    });
    linker.createGenresByItunes(data);
    return data;
  }),
  findUniqueArtist: publicProcedure
    .input(findUniqueInput)
    .query(async ({ input: { id, lang } }) => {
      if (!id) return null;
      id = getItunesId(id);
      if (!id) return null;
      const { data } = await itunes.lookupArtist({ id, lang }),
        result = data.results[0];
      if (result)
        linker.findedUniqueItunes(
          String(result.artistId),
          result.artistName,
          lang
        );
      return data;
    }),
  searchAlbums: publicProcedure.input(searchInput).query(async ({ input }) => {
    const { data } = await itunes.searchAlbums({
      ...input,
      ...baseParams,
    });
    linker.createGenresByItunes(data);
    return data;
  }),
  findUniqueAlbum: publicProcedure
    .input(findUniqueInput)
    .query(async ({ input: { id, lang } }) => {
      if (!id) return null;
      id = getItunesId(id);
      if (!id) return null;
      const { data } = await itunes.lookupAlbum({ id, lang }),
        result = data.results[0];
      if (result)
        linker.findedUniqueItunes(
          result.collectionViewUrl,
          result.collectionName,
          lang
        );
      return data;
    }),
});
