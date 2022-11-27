import {createRouter} from "./context"
import {z} from "zod"
import schemaTypeFor from "../../types/schemaForType"
import {Prisma} from "@prisma/client"
import {locale} from "../../utils/zod"
import {TRPCError} from "@trpc/server"
import {createPaginator, PaginateOptions} from "prisma-pagination"

export const artistRouter = createRouter()
  .query("index", {
    input: z.object({
      options: schemaTypeFor<PaginateOptions>()(
        z.object({
          page: z.number().or(z.string()).optional(),
          perPage: z.number().or(z.string()).optional(),
        })
      ),
      args: schemaTypeFor<Prisma.ArtistFindManyArgs>()(
        z.object({
          include: z
            .object({
              bands: z.boolean(),
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
        Prisma.ArtistGetPayload<{
          include: {bands: true}
        }>,
        Prisma.ArtistFindManyArgs
      >(ctx.prisma.artist, args)
    },
  })
  .mutation("search", {
    input: schemaTypeFor<Prisma.ArtistFindManyArgs>()(
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
      return ctx.prisma.artist.findMany(input)
    },
  })
  .mutation("create", {
    input: schemaTypeFor<Prisma.ArtistCreateInput>()(
      z.object({
        name: locale,
      })
    ),
    async resolve({ctx, input}) {
      return await ctx.prisma.artist.create({
        data: {
          ...input,
        },
      })
    },
  })
  .mutation("update", {
    input: schemaTypeFor<Prisma.ArtistUpdateInput>()(
      z.object({
        id: z.string(),
        name: locale.optional(),
        bands: z
          .object({
            disconnect: z.object({id: z.string().optional()}).optional(),
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
