import { createRouter } from "./helpers/createRouter";
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

export const bookmarksRouter = createRouter()

  .query("aggregateBookmark", {
    input: BookmarkAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateBookmark = await ctx.prisma.bookmark.aggregate(input);
      return aggregateBookmark;
    },
  })

  .query("aggregateBookmarkRaw", {
    input: BookmarkAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateBookmarkRaw = await ctx.prisma.bookmark.aggregateRaw(input);
      return aggregateBookmarkRaw;
    },
  })

  .mutation("createManyBookmark", {
    input: BookmarkCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyBookmark = await ctx.prisma.bookmark.createMany(input);
      return createManyBookmark;
    },
  })

  .mutation("createOneBookmark", {
    input: BookmarkCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneBookmark = await ctx.prisma.bookmark.create(input);
      return createOneBookmark;
    },
  })

  .mutation("deleteManyBookmark", {
    input: BookmarkDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyBookmark = await ctx.prisma.bookmark.deleteMany(input);
      return deleteManyBookmark;
    },
  })

  .mutation("deleteOneBookmark", {
    input: BookmarkDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneBookmark = await ctx.prisma.bookmark.delete(input);
      return deleteOneBookmark;
    },
  })

  .query("findFirstBookmark", {
    input: BookmarkFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstBookmark = await ctx.prisma.bookmark.findFirst(input);
      return findFirstBookmark;
    },
  })

  .query("findFirstBookmarkOrThrow", {
    input: BookmarkFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstBookmarkOrThrow = await ctx.prisma.bookmark.findFirstOrThrow(input);
      return findFirstBookmarkOrThrow;
    },
  })

  .query("findManyBookmark", {
    input: BookmarkFindManySchema,
    async resolve({ ctx, input }) {
      const findManyBookmark = await ctx.prisma.bookmark.findMany(input);
      return findManyBookmark;
    },
  })

  .query("findBookmarkRaw", {
    input: BookmarkFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findBookmarkRaw = await ctx.prisma.bookmark.findRaw(input);
      return findBookmarkRaw;
    },
  })

  .query("findUniqueBookmark", {
    input: BookmarkFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueBookmark = await ctx.prisma.bookmark.findUnique(input);
      return findUniqueBookmark;
    },
  })

  .query("findUniqueBookmarkOrThrow", {
    input: BookmarkFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueBookmarkOrThrow = await ctx.prisma.bookmark.findUniqueOrThrow(input);
      return findUniqueBookmarkOrThrow;
    },
  })

  .query("groupByBookmark", {
    input: BookmarkGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByBookmark = await ctx.prisma.bookmark.groupBy(input);
      return groupByBookmark;
    },
  })

  .mutation("updateManyBookmark", {
    input: BookmarkUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyBookmark = await ctx.prisma.bookmark.updateMany(input);
      return updateManyBookmark;
    },
  })

  .mutation("updateOneBookmark", {
    input: BookmarkUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneBookmark = await ctx.prisma.bookmark.update(input);
      return updateOneBookmark;
    },
  })

  .mutation("upsertOneBookmark", {
    input: BookmarkUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneBookmark = await ctx.prisma.bookmark.upsert(input);
      return upsertOneBookmark;
    },
  })
