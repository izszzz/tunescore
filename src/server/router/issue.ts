import {createRouter} from "./context"
import {z} from "zod"
import schemaTypeFor from "../../types/schemaForType"
import {Prisma} from "@prisma/client"

export const issueRouter = createRouter()
  .mutation("index", {
    input: z.object({
      include: z.object({user: z.boolean()}).optional(),
      where: z
        .object({
          title: z.string().optional(),
        })
        .optional(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.issue.findMany(input)
    },
  })
  .mutation("create", {
    input: schemaTypeFor<Omit<Prisma.IssueCreateInput, "user">>()(
      z.object({
        title: z.string(),
        body: z.string(),
        music: z.object({
          connect: z.object({id: z.string()}),
        }),
      })
    ),
    async resolve({ctx, input}) {
      return await ctx.prisma.issue.create({
        data: {...input, user: {connect: {id: ctx.session?.user?.id}}},
      })
    },
  })
  .mutation("update", {
    input: schemaTypeFor<Prisma.IssueUpdateInput>()(
      z.object({
        id: z.string(),
        title: z.string(),
        body: z.string(),
      })
    ),
    async resolve({ctx, input}) {
      const {id, ...data} = input
      return await ctx.prisma.issue.update({
        where: {id},
        data,
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
