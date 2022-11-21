import {createRouter} from "./context"
import {z} from "zod"
import {TRPCError} from "@trpc/server"
import {Prisma} from "@prisma/client"
import schemaTypeFor from "../../types/schemaForType"
import {locale} from "../../utils/zod"

export const musicRouter = createRouter()
  .mutation("index", {
    input: z.object({
      include: z.object({user: z.boolean()}).optional(),
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
      return await ctx.prisma.music.findMany(input)
    },
  })
  .query("show", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input}) {
      const {id} = input
      const music = await ctx.prisma.music.findUnique({
        where: {id},
        include: {
          user: true,
          band: true,
          composers: true,
          lyrists: true,
          artists: true,
          _count: {
            select: {bookmarks: true},
          },
        },
      })
      if (!music) throw new TRPCError({code: "NOT_FOUND"})
      const bookmarked = await ctx.prisma.music.findFirst({
        where: {
          id,
        },
        include: {
          bookmarks: {where: {id: ctx.session?.user?.id}},
        },
      })
      return {...music, bookmarked: !!bookmarked?.bookmarks.length}
    },
  })
  .mutation("create", {
    input: schemaTypeFor<Prisma.MusicCreateInput>()(
      z.object({
        title: locale,
        score: z.string(),
        visibility: z.enum(["PUBLIC", "PRIVATE"]),
        type: z.enum(["ORIGINAL", "COPY"]),
      })
    ),
    async resolve({ctx, input}) {
      if (!ctx.session?.user) throw new TRPCError({code: "UNAUTHORIZED"})
      let customInput: Prisma.MusicCreateInput = input
      if (input.type === "ORIGINAL") {
        customInput = {
          ...input,
          user: {
            connect: {
              id: ctx.session.user?.id,
            },
          },
        }
      }
      return await ctx.prisma.music.create({
        data: {
          ...customInput,
        },
      })
    },
  })

  .mutation("update", {
    input: schemaTypeFor<Prisma.MusicUpdateInput>()(
      z.object({
        id: z.string(),
        title: locale.optional(),
        score: z
          .string()
          .or(z.object({set: z.string().optional()}))
          .optional(),
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
        link: z
          .object({
            streaming: z
              .object({
                youtube: z.string().nullish(),
                twitter: z.string().nullish(),
                itunes: z.string().nullish(),
              })
              .nullish(),
          })
          .nullish(),
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
  .mutation("bookmark.create", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input: {id}}) {
      if (!ctx.session?.user) throw new TRPCError({code: "UNAUTHORIZED"})
      const {user} = ctx.session
      return await ctx.prisma.music.update({
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
      return await ctx.prisma.music.update({
        where: {id},
        data: {
          bookmarks: {
            disconnect: {id: ctx.session.user.id},
          },
        },
      })
    },
  })
