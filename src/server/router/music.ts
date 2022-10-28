import {createRouter} from "./context"
import {z} from "zod"
import {TRPCError} from "@trpc/server"
import {Prisma} from "@prisma/client"
import schemaTypeFor from "../../types/schemaForType"

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
  .mutation("update", {
    input: schemaTypeFor<Prisma.MusicUpdateInput>()(
      z.object({
        id: z.string(),
        title: z.object({ja: z.string(), en: z.string()}).optional(),
        score: z.string().optional(),
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
