import { z } from "zod";

import { Linker } from "../../utils/linker";
import { itunes } from "../common/itunes";
import { publicProcedure, router } from "../trpc";

const linker = new Linker();
export const itunesRouter = router({
  searchMusics: publicProcedure.input(z.string()).query(async ({ input }) => {
    const data = await (
      await itunes.searchMusics({
        term: input,
        limit: 100,
        offset: 12,
      })
    ).data;
    console.log(data);
    //   linker.searchedSpotifyTracks(prisma, spotify, data);
    return data;
  }),
  findUniqueMusic: publicProcedure
    .input(z.string().nullish())
    .query(async ({ input }) =>
      input ? await (await itunes.lookupMusic({ id: input })).data : null
    ),
  searchArtists: publicProcedure.input(z.string()).query(async ({ input }) => {
    const data = await (
      await itunes.searchArtists({
        term: input,
        limit: 100,
        offset: 12,
      })
    ).data;
    return data;
  }),
  findUniqueArtist: publicProcedure
    .input(z.string().nullish())
    .query(async ({ input }) =>
      input ? await (await itunes.lookupArtist({ id: input })).data : null
    ),
  searchAlbums: publicProcedure.input(z.string()).query(async ({ input }) => {
    const data = await (
      await itunes.searchAlbums({
        term: input,
        limit: 100,
        offset: 12,
      })
    ).data;
    //   linker.searchedSpotifyAlbums(prisma, spotify, data);
    return data;
  }),
  findUniqueAlbum: publicProcedure
    .input(z.string().nullish())
    .query(async ({ input }) =>
      input ? await (await itunes.lookupAlbum({ id: input })).data : null
    ),
});
