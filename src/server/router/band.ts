import {TRPCError} from "@trpc/server"
import {z} from "zod"
import {locale} from "../../utils/zod"
import {createRouter} from "./context"

export const bandRouter = createRouter()
  .mutation("index", {
    input: z.object({
      where: z
        .object({
          name: z
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
      return await ctx.prisma.band.findMany(input)
    },
  })
  .mutation("create", {
    input: z.object({
      name: z.object({ja: z.string().nullish(), en: z.string().nullish()}),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.band.create({
        data: {
          ...input,
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
