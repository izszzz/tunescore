import { createRouter } from "./helpers/createRouter";
import { AlbumFindUniqueSchema } from "../schemas/findUniqueAlbum.schema";
import { AlbumFindFirstSchema } from "../schemas/findFirstAlbum.schema";
import { AlbumFindManySchema } from "../schemas/findManyAlbum.schema";
import { AlbumCreateOneSchema } from "../schemas/createOneAlbum.schema";
import { AlbumCreateManySchema } from "../schemas/createManyAlbum.schema";
import { AlbumDeleteOneSchema } from "../schemas/deleteOneAlbum.schema";
import { AlbumUpdateOneSchema } from "../schemas/updateOneAlbum.schema";
import { AlbumDeleteManySchema } from "../schemas/deleteManyAlbum.schema";
import { AlbumUpdateManySchema } from "../schemas/updateManyAlbum.schema";
import { AlbumUpsertSchema } from "../schemas/upsertOneAlbum.schema";
import { AlbumAggregateSchema } from "../schemas/aggregateAlbum.schema";
import { AlbumGroupBySchema } from "../schemas/groupByAlbum.schema";
import { AlbumFindRawObjectSchema } from "../schemas/objects/AlbumFindRaw.schema";
import { AlbumAggregateRawObjectSchema } from "../schemas/objects/AlbumAggregateRaw.schema";

export const albumsRouter = createRouter()

  .query("aggregateAlbum", {
    input: AlbumAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateAlbum = await ctx.prisma.album.aggregate(input);
      return aggregateAlbum;
    },
  })

  .query("aggregateAlbumRaw", {
    input: AlbumAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateAlbumRaw = await ctx.prisma.album.aggregateRaw(input);
      return aggregateAlbumRaw;
    },
  })

  .mutation("createManyAlbum", {
    input: AlbumCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyAlbum = await ctx.prisma.album.createMany(input);
      return createManyAlbum;
    },
  })

  .mutation("createOneAlbum", {
    input: AlbumCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneAlbum = await ctx.prisma.album.create(input);
      return createOneAlbum;
    },
  })

  .mutation("deleteManyAlbum", {
    input: AlbumDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyAlbum = await ctx.prisma.album.deleteMany(input);
      return deleteManyAlbum;
    },
  })

  .mutation("deleteOneAlbum", {
    input: AlbumDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneAlbum = await ctx.prisma.album.delete(input);
      return deleteOneAlbum;
    },
  })

  .query("findFirstAlbum", {
    input: AlbumFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstAlbum = await ctx.prisma.album.findFirst(input);
      return findFirstAlbum;
    },
  })

  .query("findFirstAlbumOrThrow", {
    input: AlbumFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstAlbumOrThrow = await ctx.prisma.album.findFirstOrThrow(input);
      return findFirstAlbumOrThrow;
    },
  })

  .query("findManyAlbum", {
    input: AlbumFindManySchema,
    async resolve({ ctx, input }) {
      const findManyAlbum = await ctx.prisma.album.findMany(input);
      return findManyAlbum;
    },
  })

  .query("findAlbumRaw", {
    input: AlbumFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findAlbumRaw = await ctx.prisma.album.findRaw(input);
      return findAlbumRaw;
    },
  })

  .query("findUniqueAlbum", {
    input: AlbumFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueAlbum = await ctx.prisma.album.findUnique(input);
      return findUniqueAlbum;
    },
  })

  .query("findUniqueAlbumOrThrow", {
    input: AlbumFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueAlbumOrThrow = await ctx.prisma.album.findUniqueOrThrow(input);
      return findUniqueAlbumOrThrow;
    },
  })

  .query("groupByAlbum", {
    input: AlbumGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByAlbum = await ctx.prisma.album.groupBy(input);
      return groupByAlbum;
    },
  })

  .mutation("updateManyAlbum", {
    input: AlbumUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyAlbum = await ctx.prisma.album.updateMany(input);
      return updateManyAlbum;
    },
  })

  .mutation("updateOneAlbum", {
    input: AlbumUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneAlbum = await ctx.prisma.album.update(input);
      return updateOneAlbum;
    },
  })

  .mutation("upsertOneAlbum", {
    input: AlbumUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneAlbum = await ctx.prisma.album.upsert(input);
      return upsertOneAlbum;
    },
  })
