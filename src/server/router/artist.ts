import {createRouter} from "./context"
import {z} from "zod"
import schemaTypeFor from "../../types/schemaForType"
import {Artist, Prisma} from "@prisma/client"
import {locale} from "../../utils/zod"
import {TRPCError} from "@trpc/server"

export const artistRouter = createRouter()
  .query("index", {
    async resolve({ctx}) {
      return await ctx.prisma.artist.findMany({include: {band: true}})
    },
  })
  .query("show", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input: {id}}) {
      const artist = await ctx.prisma.artist.findFirst({
        where: {id},
        include: {
          band: true,
          composedMusics: {
            include: {band: true, lyrists: true, composers: true},
          },
          writtenMusics: {
            include: {band: true, lyrists: true, composers: true},
          },
          musics: {
            include: {band: true, lyrists: true, composers: true},
          },
        },
      })
      if (!artist) throw new TRPCError({code: "NOT_FOUND"})
      const bookmarked = await ctx.prisma.artist.findFirst({
        where: {
          id,
        },
        include: {
          bookmarks: {where: {id: ctx.session?.user?.id}},
        },
      })
      return {...artist, bookmarked: !!bookmarked?.bookmarks.length}
    },
  })
  .mutation("search", {
    input: z.object({
      name: z.string().optional(),
      locale: z.string(),
    }),
    async resolve({ctx, input}) {
      const result = await ctx.prisma.artist.findRaw({
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
    input: schemaTypeFor<Prisma.ArtistCreateInput>()(
      z.object({
        name: locale,
      })
    ),
    async resolve({ctx, input}) {
      return await ctx.prisma.artist.create({data: input})
    },
  })
  .mutation("update", {
    input: schemaTypeFor<Prisma.ArtistUpdateInput>()(
      z.object({
        id: z.string(),
        name: locale.optional(),
        band: z
          .object({
            disconnect: z.boolean().optional(),
            connect: z.object({id: z.string().optional()}).optional(),
          })
          .optional(),
      })
    ),
    async resolve({ctx, input}) {
      const {id, ...data} = input
      return await ctx.prisma.artist.update({
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
  .mutation("bookmark.create", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input: {id}}) {
      if (!ctx.session?.user) throw new TRPCError({code: "UNAUTHORIZED"})
      const {user} = ctx.session
      return await ctx.prisma.artist.update({
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
      return await ctx.prisma.artist.update({
        where: {id},
        data: {
          bookmarks: {
            disconnect: {id: ctx.session.user.id},
          },
        },
      })
    },
  })
