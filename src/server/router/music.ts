import {createRouter} from "./context"
import {z} from "zod"
import {TRPCError} from "@trpc/server"
import {Music, Prisma} from "@prisma/client"
import schemaTypeFor from "../../types/schemaForType"
import {locale} from "../../utils/zod"

export const musicRouter = createRouter()
  .query("index", {
    async resolve({ctx}) {
      return await ctx.prisma.music.findMany({include: {user: true}})
    },
  })
  .query("show", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.music.findFirst({
        where: {id: input.id},
        include: {
          user: true,
          band: true,
          composers: true,
          lyrists: true,
          artists: true,
        },
      })
    },
  })
  .mutation("create", {
    input: z.object({
      title: z.any(),
    }),
    async resolve({ctx, input}) {
      if (!ctx.session?.user) throw new TRPCError({code: "UNAUTHORIZED"})
      return await ctx.prisma.music.create({
        data: {
          title: input.title,
          user: {
            connect: {
              id: ctx.session.user?.id,
            },
          },
        },
      })
    },
  })
  .mutation("search", {
    input: z.object({
      title: z.string(),
      locale: z.string(),
    }),
    async resolve({ctx, input}) {
      const result = await ctx.prisma.band.findRaw({
        filter: {
          ["name." + input.locale]: {$regex: input.title, $options: "i"},
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
      }) as Music[]
    },
  })
  .mutation("update", {
    input: schemaTypeFor<Prisma.MusicUpdateInput>()(
      z.object({
        id: z.string(),
        title: locale.optional(),
        score: z
          .string()
          .or(
            z.object({set: z.string().nullish(), unset: z.boolean().optional()})
          )
          .nullish(),
        band: z
          .object({
            disconnect: z.boolean().optional(),
            connect: z.object({id: z.string().optional()}).optional(),
          })
          .optional(),
        composers: z
          .object({
            disconnect: z
              .object({id: z.string().optional()})
              .or(z.object({id: z.string().optional()}).array())
              .optional(),
            connect: z
              .object({id: z.string().optional()})
              .or(z.object({id: z.string().optional()}).array())
              .optional(),
          })
          .optional(),
        lyrists: z
          .object({
            disconnect: z
              .object({id: z.string().optional()})
              .or(z.object({id: z.string().optional()}).array())
              .optional(),
            connect: z
              .object({id: z.string().optional()})
              .or(z.object({id: z.string().optional()}).array())
              .optional(),
          })
          .optional(),
        artists: z
          .object({
            disconnect: z
              .object({id: z.string().optional()})
              .or(z.object({id: z.string().optional()}).array())
              .optional(),
            connect: z
              .object({id: z.string().optional()})
              .or(z.object({id: z.string().optional()}).array())
              .optional(),
          })
          .optional(),
      })
    ),
    async resolve({ctx, input}) {
      const {id, ...data} = input
      return await ctx.prisma.music.update({
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
      return await ctx.prisma.music.delete({where: {id: input.id}})
    },
  })
