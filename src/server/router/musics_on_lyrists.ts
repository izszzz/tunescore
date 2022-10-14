import {createRouter} from "./context"
import {z} from "zod"

export const musicsOnLyristsRouter = createRouter()
  .mutation("create", {
    input: z.object({
      musicId: z.string(),
      lyristId: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.musicsOnLyrists.create({
        data: {
          musicId: input.musicId,
          lyristId: input.lyristId,
        },
      })
    },
  })
  .mutation("destroy", {
    input: z.object({
      musicId: z.string(),
      lyristId: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.musicsOnLyrists.delete({
        where: {
          musicId_lyristId: {
            musicId: input.musicId,
            lyristId: input.lyristId,
          },
        },
      })
    },
  })
