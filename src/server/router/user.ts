import {createRouter} from "./context"
import {z} from "zod"
import schemaTypeFor from "../../types/schemaForType"
import {Prisma} from "@prisma/client"
import {TRPCError} from "@trpc/server"

export const userRouter = createRouter()
  .query("index", {
    async resolve({ctx}) {
      return await ctx.prisma.user.findMany()
    },
  })
  .query("show", {
    input: z.object({
      id: z.string(),
      currentUserId: z.string().optional(),
    }),
    async resolve({ctx, input}) {
      const {id, currentUserId} = input
      const user = await ctx.prisma.user.findFirst({
        where: {id},
        include: {
          musics: true,
          followedBy: {
            include: {
              _count: {select: {followedBy: true, following: true}},
            },
          },
          following: {
            include: {
              _count: {select: {followedBy: true, following: true}},
            },
          },
          _count: {
            select: {followedBy: true, following: true},
          },
        },
      })
      if (!user) throw new TRPCError({code: "NOT_FOUND"})
      const currentUser = await ctx.prisma.user.findFirst({
        where: {id: currentUserId},
        include: {
          following: {where: {id}},
        },
      })
      return {
        ...user,
        followed: !!currentUser?.following.length,
      }
    },
  })
  .mutation("update", {
    input: schemaTypeFor<Prisma.UserUpdateInput>()(
      z.object({
        id: z.string(),
        name: z
          .string()
          .or(
            z.object({set: z.string().nullish(), unset: z.boolean().optional()})
          )
          .nullish(),
        following: z
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
        followedBy: z
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
      return await ctx.prisma.user.update({
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
      const {id} = input
      return await ctx.prisma.user.delete({where: {id}})
    },
  })
