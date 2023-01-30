import { t, shieldedProcedure } from "./helpers/createRouter";
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

export const albumsRouter = t.router({
  aggregateAlbum: shieldedProcedure
    .input(AlbumAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateAlbum = await ctx.prisma.album.aggregate(input);
      return aggregateAlbum;
    }),
  aggregateAlbumRaw: shieldedProcedure
    .input(AlbumAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateAlbumRaw = await ctx.prisma.album.aggregateRaw(input);
      return aggregateAlbumRaw;
    }),
  createManyAlbum: shieldedProcedure
    .input(AlbumCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyAlbum = await ctx.prisma.album.createMany(input);
      return createManyAlbum;
    }),
  createOneAlbum: shieldedProcedure
    .input(AlbumCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneAlbum = await ctx.prisma.album.create(input);
      return createOneAlbum;
    }),
  deleteManyAlbum: shieldedProcedure
    .input(AlbumDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyAlbum = await ctx.prisma.album.deleteMany(input);
      return deleteManyAlbum;
    }),
  deleteOneAlbum: shieldedProcedure
    .input(AlbumDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneAlbum = await ctx.prisma.album.delete(input);
      return deleteOneAlbum;
    }),
  findFirstAlbum: shieldedProcedure
    .input(AlbumFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstAlbum = await ctx.prisma.album.findFirst(input);
      return findFirstAlbum;
    }),
  findFirstAlbumOrThrow: shieldedProcedure
    .input(AlbumFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstAlbumOrThrow = await ctx.prisma.album.findFirstOrThrow(input);
      return findFirstAlbumOrThrow;
    }),
  findManyAlbum: shieldedProcedure
    .input(AlbumFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyAlbum = await ctx.prisma.album.findMany(input);
      return findManyAlbum;
    }),
  findAlbumRaw: shieldedProcedure
    .input(AlbumFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findAlbumRaw = await ctx.prisma.album.findRaw(input);
      return findAlbumRaw;
    }),
  findUniqueAlbum: shieldedProcedure
    .input(AlbumFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueAlbum = await ctx.prisma.album.findUnique(input);
      return findUniqueAlbum;
    }),
  findUniqueAlbumOrThrow: shieldedProcedure
    .input(AlbumFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueAlbumOrThrow = await ctx.prisma.album.findUniqueOrThrow(input);
      return findUniqueAlbumOrThrow;
    }),
  groupByAlbum: shieldedProcedure
    .input(AlbumGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByAlbum = await ctx.prisma.album.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByAlbum;
    }),
  updateManyAlbum: shieldedProcedure
    .input(AlbumUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyAlbum = await ctx.prisma.album.updateMany(input);
      return updateManyAlbum;
    }),
  updateOneAlbum: shieldedProcedure
    .input(AlbumUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneAlbum = await ctx.prisma.album.update(input);
      return updateOneAlbum;
    }),
  upsertOneAlbum: shieldedProcedure
    .input(AlbumUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneAlbum = await ctx.prisma.album.upsert(input);
      return upsertOneAlbum;
    }),

})
