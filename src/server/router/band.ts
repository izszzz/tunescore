import {Band, Prisma} from "@prisma/client"
import {TRPCError} from "@trpc/server"
import {z} from "zod"
import {locale} from "../../utils/zod"
import {createRouter} from "./context"

export const bandRouter = createRouter()
  .query("index", {
    async resolve({ctx}) {
      return await ctx.prisma.band.findMany({
        include: {_count: {select: {artists: true, musics: true}}},
      })
    },
  })
  .query("show", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.band.findFirst({
        where: {id: input.id},
        include: {
          artists: true,
          musics: {include: {composers: true, lyrists: true}},
        },
      })
    },
  })
  .mutation("search", {
    input: z.object({
      name: z.string(),
      locale: z.string(),
    }),
    async resolve({ctx, input}) {
      const result = await ctx.prisma.band.findRaw({
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
      }) as Band[]
    },
  })
  .mutation("create", {
    input: z.object({
      name: z.object({ja: z.string().nullish(), en: z.string().nullish()}),
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
      name: locale.optional(),
    }),
    async resolve({ctx, input}) {
      const {id, ...data} = input
      return await ctx.prisma.band.update({
        where: {id},
        data,
      })
    },
  })
  .mutation("bookmark", {
    input: z.object({id: z.string(), value: z.boolean()}),
    async resolve({ctx, input}) {
      if (!ctx.session?.user) throw new TRPCError({code: "UNAUTHORIZED"})
      const {id, value} = input
      const {user} = ctx.session
      const bookmarks: Prisma.BandUpdateInput["bookmarks"] = value
        ? {create: {userId: user.id}}
        : {delete: {id}}
      return await ctx.prisma.band.update({
        where: {id},
        data: {
          bookmarks,
        },
      })
    },
  })
  .mutation("destroy", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.band.delete({where: input})
    },
  })
