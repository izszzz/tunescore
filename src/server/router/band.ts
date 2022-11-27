import {Prisma} from "@prisma/client"
import {TRPCError} from "@trpc/server"
import schemaTypeFor from "../../types/schemaForType"
import {createPaginator, PaginateOptions} from "prisma-pagination"
import {z} from "zod"
import {locale} from "../../utils/zod"
import {createRouter} from "./context"

export const bandRouter = createRouter()
  .query("index", {
    input: z.object({
      options: schemaTypeFor<PaginateOptions>()(
        z.object({
          page: z.number().or(z.string()).optional(),
          perPage: z.number().or(z.string()).optional(),
        })
      ),
      args: schemaTypeFor<Prisma.BandFindManyArgs>()(
        z.object({
          include: z
            .object({
              _count: z
                .object({
                  select: z.object({
                    musics: z.boolean(),
                    artists: z.boolean(),
                  }),
                })
                .optional(),
            })
            .optional(),
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
        })
      ),
    }),
    async resolve({ctx, input}) {
      const {args, options} = input
      const paginate = createPaginator(options)
      return await paginate<
        Prisma.BandGetPayload<{
          include: {
            _count: {
              select: {
                artists: true
                musics: true
              }
            }
          }
        }>,
        Prisma.BandFindManyArgs
      >(ctx.prisma.band, args)
    },
  })
  .mutation("search", {
    input: schemaTypeFor<Prisma.BandFindManyArgs>()(
      z.object({
        where: z
          .object({
            name: z
              .object({
                is: z
                  .object({
                    ja: z.object({contains: z.string()}).optional(),
                    en: z.object({contains: z.string()}).optional(),
                  })
                  .optional(),
              })
              .optional(),
          })
          .optional(),
        take: z.number(),
      })
    ),
    async resolve({ctx, input}) {
      return ctx.prisma.band.findMany(input)
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
