import {createRouter} from "./context"
import {z} from "zod"

export const musicsOnArtistsRouter = createRouter()
  .mutation("create", {
    input: z.object({
      musicId: z.string(),
      artistId: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.musicsOnArtists.create({
        data: {
          musicId: input.musicId,
          artistId: input.artistId,
        },
      })
    },
  })
  .mutation("destroy", {
    input: z.object({
      musicId: z.string(),
      artistId: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.musicsOnArtists.delete({
        where: {
          musicId_artistId: {
            musicId: input.musicId,
            artistId: input.artistId,
          },
        },
      })
    },
  })
