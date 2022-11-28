import {createRouter} from "./context"
import {z} from "zod"
import {Prisma} from "@prisma/client"
import {TRPCError} from "@trpc/server"
import {createPaginator} from "prisma-pagination"
import {ArtistFindManySchema} from "../../../prisma/generated/schemas/findManyArtist.schema"
import {ArtistCreateInputObjectSchema} from "../../../prisma/generated/schemas/objects/ArtistCreateInput.schema"
import {ArtistUpdateOneSchema} from "../../../prisma/generated/schemas/updateOneArtist.schema"
import {PaginateOptionsSchema} from "../../utils/zod"
import {ArtistFindUniqueSchema} from "../../../prisma/generated/schemas/findUniqueArtist.schema"

export const artistRouter = createRouter()
  .query("index", {
    input: z.object({
      options: PaginateOptionsSchema,
      args: ArtistFindManySchema,
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
  .query("show", {
    input: ArtistFindUniqueSchema,
    async resolve({ctx, input}) {
      const music = await ctx.prisma.artist.findUnique({
        ...input,
        include: {
          bands: true,
          writtenMusics: {
            include: {
              band: true,
              composers: true,
              lyrists: true,
            },
          },
          composedMusics: {
            include: {
              band: true,
              composers: true,
              lyrists: true,
            },
          },
          musics: {
            include: {
              band: true,
              composers: true,
              lyrists: true,
            },
          },
        },
      })
      if (!music) throw new TRPCError({code: "NOT_FOUND"})
      const bookmarked = await ctx.prisma.artist.findFirst({
        where: input.where,
        include: {
          bookmarks: {where: {id: ctx.session?.user?.id}},
        },
      })
      return {...music, bookmarked: !!bookmarked?.bookmarks.length}
    },
  })
  .mutation("search", {
    input: ArtistFindManySchema,
    async resolve({ctx, input}) {
      return ctx.prisma.artist.findMany(input)
    },
  })
  .mutation("create", {
    input: ArtistCreateInputObjectSchema,
    async resolve({ctx, input}) {
      return await ctx.prisma.artist.create({data: input})
    },
  })
  .mutation("update", {
    input: ArtistUpdateOneSchema,
    async resolve({ctx, input}) {
      return await ctx.prisma.artist.update(input)
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
