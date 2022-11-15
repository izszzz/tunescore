import {Band} from "@prisma/client"
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
    async resolve({ctx, input: {id}}) {
      const band = await ctx.prisma.band.findFirst({
        where: {id: id},
        include: {
          artists: true,
          musics: {include: {composers: true, lyrists: true}},
        },
      })
      if (!band) throw new TRPCError({code: "NOT_FOUND"})
      const bookmarked = await ctx.prisma.band.findFirst({
        where: {
          id,
        },
        include: {
          bookmarks: {where: {id: ctx.session?.user?.id}},
        },
      })
      return {...band, bookmarked: !!bookmarked?.bookmarks.length}
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
  .mutation("destroy", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.band.delete({where: input})
    },
  })
  .mutation("bookmark.create", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input: {id}}) {
      if (!ctx.session?.user) throw new TRPCError({code: "UNAUTHORIZED"})
      const {user} = ctx.session
      return await ctx.prisma.band.update({
        where: {id},
        data: {
          bookmarks: {
            connect: {id: user.id},
          },
        },
      })
    },
  })
  .mutation("bookmark.destroy", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input: {id}}) {
      if (!ctx.session?.user) throw new TRPCError({code: "UNAUTHORIZED"})
      return await ctx.prisma.band.update({
        where: {id},
        data: {
          bookmarks: {
            disconnect: {id: ctx.session.user.id},
          },
        },
      })
    },
  })
