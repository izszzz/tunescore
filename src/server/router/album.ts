import {createRouter} from "./context"
import {z} from "zod"
import schemaTypeFor from "../../types/schemaForType"
import {Prisma} from "@prisma/client"
import {locale} from "../../utils/zod"
import {TRPCError} from "@trpc/server"

export const albumRouter = createRouter()
  .mutation("index", {
    input: z.object({
      include: z.object({band: z.boolean().optional()}).optional(),
      where: z
        .object({
          title: z
            .object({
              is: z.object({
                ja: z.object({contains: z.string()}).optional(),
                en: z.object({contains: z.string()}).optional(),
              }),
            })
            .optional(),
        })
        .optional(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.album.findMany(input)
    },
  })
  .mutation("create", {
    input: schemaTypeFor<Prisma.AlbumCreateInput>()(
      z.object({
        title: locale,
      })
    ),
    async resolve({ctx, input}) {
      return await ctx.prisma.album.create({
        data: {
          ...input,
        },
      })
    },
  })
  .mutation("update", {
    input: schemaTypeFor<Prisma.AlbumUpdateInput>()(
      z.object({
        id: z.string(),
        title: locale.optional(),
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
      return await ctx.prisma.album.delete({where: {id: input.id}})
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
