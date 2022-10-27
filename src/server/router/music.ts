import {createRouter} from "./context"
import {z} from "zod"
import {TRPCError} from "@trpc/server"

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
    input: z.object({
      id: z.string(),
      title: z.object({}),
      band: z
        .object({
          id: z.string(),
        })
        .nullish(),
      composers: z
        .array(z.object({id: z.string(), name: z.string()}))
        .nullish(),
      lyrists: z.array(z.object({id: z.string(), name: z.string()})).nullish(),
    }),
    async resolve({ctx, input}) {
      console.log(input.composers)
      return await ctx.prisma.music.update({
        where: {id: input.id},
        data: {
          title: input.title,
          bandId: input.band?.id,
        },
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
