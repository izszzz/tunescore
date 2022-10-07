import {createRouter} from "./context"
import {z} from "zod"

export const musicRouter = createRouter()
  .query("index", {
    async resolve({ctx}) {
      return await ctx.prisma.music.findMany()
    },
  })
  .query("show", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.music.findFirst({where: {id: input.id}})
    },
  })
  .mutation("create", {
    input: z.object({
      title: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.music.create({
        data: {
          title: input.title,
        },
      })
    },
  })
  .mutation("update", {
    input: z.object({
      id: z.string(),
      title: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.music.update({
        where: {id: input.id},
        data: {
          title: input.title,
        },
      })
    },
  })
  .mutation("destroy", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.music.delete({where: {id: input.id}})
    },
  })
