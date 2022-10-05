import {createRouter} from "./context"
import {z} from "zod"

export const userRouter = createRouter()
  .query("index", {
    async resolve({ctx}) {
      return await ctx.prisma.user.findMany()
    },
  })
  .query("show", {
    input: z
      .object({
        id: z.string().nullish(),
      })
      .nullish(),
    async resolve({ctx, input}) {
      return await ctx.prisma.user.findFirst({where: {id: input?.id ?? ""}})
    },
  })
  .mutation("update", {
    input: z
      .object({
        id: z.string().nullish(),
        name: z.string().nullish(),
      })
      .nullish(),
    async resolve({ctx, input}) {
      return await ctx.prisma.user.update({
        where: {id: input?.id ?? ""},
        data: {
          name: input?.name,
        },
      })
    },
  })
  .mutation("destroy", {
    input: z
      .object({
        id: z.string().nullish(),
      })
      .nullish(),
    async resolve({ctx, input}) {
      return await ctx.prisma.user.delete({where: {id: input?.id ?? ""}})
    },
  })
