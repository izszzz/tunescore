import {createRouter} from "./context"
import {z} from "zod"
import {UserUpdateOneSchema} from "../../../prisma/generated/schemas/updateOneUser.schema"

export const userRouter = createRouter()
  .query("index", {
    async resolve({ctx}) {
      return await ctx.prisma.user.findMany()
    },
  })
  .mutation("update", {
    input: UserUpdateOneSchema,
    async resolve({ctx, input}) {
      return await ctx.prisma.user.update(input)
    },
  })
  .mutation("destroy", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input}) {
      const {id} = input
      return await ctx.prisma.user.delete({where: {id}})
    },
  })
