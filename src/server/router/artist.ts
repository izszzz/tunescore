import {createRouter} from "./context"
import {z} from "zod"

export const artistRouter = createRouter()
  .query("index", {
    async resolve({ctx}) {
      return await ctx.prisma.artist.findMany()
    },
  })
  .query("show", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.artist.findFirst({where: {id: input.id}})
    },
  })
  .mutation("create", {
    input: z.object({
      name: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.artist.create({
        data: {
          name: input.name,
        },
      })
    },
  })
  .mutation("update", {
    input: z.object({
      id: z.string(),
      name: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.artist.update({
        where: {id: input.id},
        data: {
          name: input.name,
        },
      })
    },
  })
  .mutation("destroy", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.artist.delete({where: {id: input.id}})
    },
  })
