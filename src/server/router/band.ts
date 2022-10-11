import {createRouter} from "./context"
import {z} from "zod"

export const bandRouter = createRouter()
  .query("index", {
    async resolve({ctx}) {
      return await ctx.prisma.band.findMany()
    },
  })
  .query("show", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.band.findFirst({where: {id: input.id}})
    },
  })
  .mutation("search", {
    input: z.object({
      title: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.band.findMany({
        where: {name: {contains: input.title}},
      })
    },
  })
  .mutation("create", {
    input: z.object({
      name: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.band.create({
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
      return await ctx.prisma.band.update({
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
      return await ctx.prisma.band.delete({where: {id: input.id}})
    },
  })
