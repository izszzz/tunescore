import {createRouter} from "./context"
import {z} from "zod"
import {TRPCError} from "@trpc/server"
import {AlbumCreateInputObjectSchema} from "../../../prisma/generated/schemas/objects/AlbumCreateInput.schema"
import {AlbumUpdateOneSchema} from "../../../prisma/generated/schemas/updateOneAlbum.schema"
import {AlbumDeleteOneSchema} from "../../../prisma/generated/schemas/deleteOneAlbum.schema"
import {createPaginator} from "prisma-pagination"
import {AlbumFindManySchema} from "../../../prisma/generated/schemas/findManyAlbum.schema"
import {Prisma} from "@prisma/client"
import {PaginateOptionsSchema} from "../../utils/zod"

export const albumRouter = createRouter()
  .mutation("index", {
    input: z.object({
      options: PaginateOptionsSchema,
      args: AlbumFindManySchema,
    }),
    async resolve({ctx, input}) {
      const {args, options} = input
      const paginate = createPaginator(options)
      return await paginate<
        Prisma.AlbumGetPayload<{
          include: {composers: true; lyrists: true; band: true}
        }>,
        Prisma.AlbumFindManyArgs
      >(ctx.prisma.album, args)
    },
  })
  .mutation("create", {
    input: AlbumCreateInputObjectSchema,
    async resolve({ctx, input}) {
      return await ctx.prisma.album.create({data: input})
    },
  })
  .mutation("update", {
    input: AlbumUpdateOneSchema,
    async resolve({ctx, input}) {
      return await ctx.prisma.artist.update(input)
    },
  })
  .mutation("destroy", {
    input: AlbumDeleteOneSchema,
    async resolve({ctx, input}) {
      return await ctx.prisma.album.delete(input)
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
