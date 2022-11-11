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
      return await ctx.prisma.pull.findMany({
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
      return await ctx.prisma.pull.findFirst({
        where: {id: input.id},
        include: {user: true, music: true},
      })
    },
  })
  .mutation("search", {
    input: z.object({
      name: z.string(),
      locale: z.string(),
    }),
    async resolve({ctx, input}) {
      const result = await ctx.prisma.pull.findRaw({
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
    input: schemaTypeFor<Omit<Prisma.PullCreateInput, "user" | "score">>()(
      z.object({
        title: z.string(),
        body: z.string(),
        music: z.object({
          connect: z.object({id: z.string()}),
        }),
      })
    ),
    async resolve({ctx, input}) {
      const music = await ctx.prisma.music.findFirst({
        where: {id: input.music.connect.id},
      })
      return await ctx.prisma.pull.create({
        data: {
          ...input,
          score: {
            changed: music?.score || "",
            original: music?.score || "",
          },
          user: {connect: {id: ctx.session?.user?.id}},
        },
      })
    },
  })
  .mutation("update", {
    input: schemaTypeFor<Prisma.PullUpdateInput>()(
      z.object({
        id: z.string(),
        title: z.string().optional(),
        body: z.string().optional(),
        score: z
          .object({
            update: z.object({
              original: z.string().optional(),
              changed: z.string().optional(),
            }),
          })
          .optional(),
      })
    ),
    async resolve({ctx, input}) {
      const {id, ...data} = input
      return await ctx.prisma.pull.update({
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
      return await ctx.prisma.pull.delete({where: {id: input.id}})
    },
  })
