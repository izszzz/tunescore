import { t, shieldedProcedure } from "./helpers/createRouter";
import { BookmarkFindUniqueSchema } from "../schemas/findUniqueBookmark.schema";
import { BookmarkFindFirstSchema } from "../schemas/findFirstBookmark.schema";
import { BookmarkFindManySchema } from "../schemas/findManyBookmark.schema";
import { BookmarkCreateOneSchema } from "../schemas/createOneBookmark.schema";
import { BookmarkCreateManySchema } from "../schemas/createManyBookmark.schema";
import { BookmarkDeleteOneSchema } from "../schemas/deleteOneBookmark.schema";
import { BookmarkUpdateOneSchema } from "../schemas/updateOneBookmark.schema";
import { BookmarkDeleteManySchema } from "../schemas/deleteManyBookmark.schema";
import { BookmarkUpdateManySchema } from "../schemas/updateManyBookmark.schema";
import { BookmarkUpsertSchema } from "../schemas/upsertOneBookmark.schema";
import { BookmarkAggregateSchema } from "../schemas/aggregateBookmark.schema";
import { BookmarkGroupBySchema } from "../schemas/groupByBookmark.schema";
import { BookmarkFindRawObjectSchema } from "../schemas/objects/BookmarkFindRaw.schema";
import { BookmarkAggregateRawObjectSchema } from "../schemas/objects/BookmarkAggregateRaw.schema";

export const bookmarksRouter = t.router({
  aggregateBookmark: shieldedProcedure
    .input(BookmarkAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateBookmark = await ctx.prisma.bookmark.aggregate(input);
      return aggregateBookmark;
    }),
  aggregateBookmarkRaw: shieldedProcedure
    .input(BookmarkAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateBookmarkRaw = await ctx.prisma.bookmark.aggregateRaw(input);
      return aggregateBookmarkRaw;
    }),
  createManyBookmark: shieldedProcedure
    .input(BookmarkCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyBookmark = await ctx.prisma.bookmark.createMany(input);
      return createManyBookmark;
    }),
  createOneBookmark: shieldedProcedure
    .input(BookmarkCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneBookmark = await ctx.prisma.bookmark.create(input);
      return createOneBookmark;
    }),
  deleteManyBookmark: shieldedProcedure
    .input(BookmarkDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyBookmark = await ctx.prisma.bookmark.deleteMany(input);
      return deleteManyBookmark;
    }),
  deleteOneBookmark: shieldedProcedure
    .input(BookmarkDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneBookmark = await ctx.prisma.bookmark.delete(input);
      return deleteOneBookmark;
    }),
  findFirstBookmark: shieldedProcedure
    .input(BookmarkFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstBookmark = await ctx.prisma.bookmark.findFirst(input);
      return findFirstBookmark;
    }),
  findFirstBookmarkOrThrow: shieldedProcedure
    .input(BookmarkFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstBookmarkOrThrow = await ctx.prisma.bookmark.findFirstOrThrow(input);
      return findFirstBookmarkOrThrow;
    }),
  findManyBookmark: shieldedProcedure
    .input(BookmarkFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyBookmark = await ctx.prisma.bookmark.findMany(input);
      return findManyBookmark;
    }),
  findBookmarkRaw: shieldedProcedure
    .input(BookmarkFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findBookmarkRaw = await ctx.prisma.bookmark.findRaw(input);
      return findBookmarkRaw;
    }),
  findUniqueBookmark: shieldedProcedure
    .input(BookmarkFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueBookmark = await ctx.prisma.bookmark.findUnique(input);
      return findUniqueBookmark;
    }),
  findUniqueBookmarkOrThrow: shieldedProcedure
    .input(BookmarkFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueBookmarkOrThrow = await ctx.prisma.bookmark.findUniqueOrThrow(input);
      return findUniqueBookmarkOrThrow;
    }),
  groupByBookmark: shieldedProcedure
    .input(BookmarkGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByBookmark = await ctx.prisma.bookmark.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByBookmark;
    }),
  updateManyBookmark: shieldedProcedure
    .input(BookmarkUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyBookmark = await ctx.prisma.bookmark.updateMany(input);
      return updateManyBookmark;
    }),
  updateOneBookmark: shieldedProcedure
    .input(BookmarkUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneBookmark = await ctx.prisma.bookmark.update(input);
      return updateOneBookmark;
    }),
  upsertOneBookmark: shieldedProcedure
    .input(BookmarkUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneBookmark = await ctx.prisma.bookmark.upsert(input);
      return upsertOneBookmark;
    }),

})
