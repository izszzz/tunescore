import {createRouter} from "./context"
import {z} from "zod"
import schemaTypeFor from "../../types/schemaForType"
import {Artist, Prisma} from "@prisma/client"

export const pullRouter = createRouter()
  .query("index", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.pullRequest.findMany({
        where: {music: {id: input.id}},
        include: {user: true},
      })
    },
  })
  .query("show", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.pullRequest.findFirst({
        where: {id: input.id},
      })
    },
  })
  .mutation("search", {
    input: z.object({
      name: z.string(),
      locale: z.string(),
    }),
    async resolve({ctx, input}) {
      const result = await ctx.prisma.pullRequest.findRaw({
        filter: {
          ["name." + input.locale]: {$regex: input.name, $options: "i"},
        },
      })
      // TODO: 型修正できないらしい
      // https://github.com/prisma/prisma/issues/11830
      // https://github.com/prisma/prisma/issues/5062
      return result?.map(data => {
        const {
          _id: {$oid: id},
          ...other
        } = data
        return {id, ...other}
      }) as Artist[]
    },
  })
  .mutation("create", {
    input: schemaTypeFor<Omit<Prisma.PullRequestCreateInput, "user">>()(
      z.object({
        title: z.string(),
        score: z.string(),
        music: z.object({
          connect: z.object({id: z.string()}),
        }),
      })
    ),
    async resolve({ctx, input}) {
      return await ctx.prisma.pullRequest.create({
        data: {...input, user: {connect: {id: ctx.session?.user?.id}}},
      })
    },
  })
  .mutation("update", {
    input: schemaTypeFor<Prisma.PullRequestUpdateInput>()(
      z.object({
        id: z.string(),
        title: z.string(),
        body: z.string(),
      })
    ),
    async resolve({ctx, input}) {
      const {id, ...data} = input
      return await ctx.prisma.pullRequest.update({
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
      return await ctx.prisma.pullRequest.delete({where: {id: input.id}})
    },
  })
