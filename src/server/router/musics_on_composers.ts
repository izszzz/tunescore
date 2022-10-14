import {createRouter} from "./context"
import {z} from "zod"

export const musicsOnComposersRouter = createRouter()
  .mutation("create", {
    input: z.object({
      musicId: z.string(),
      composerId: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.musicsOnComposers.create({
        data: {
          musicId: input.musicId,
          composerId: input.composerId,
        },
      })
    },
  })
  .mutation("destroy", {
    input: z.object({
      musicId: z.string(),
      composerId: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.musicsOnComposers.delete({
        where: {
          musicId_composerId: {
            musicId: input.musicId,
            composerId: input.composerId,
          },
        },
      })
    },
  })
