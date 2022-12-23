import { createRouter } from "./helpers/createRouter";
import { CommentFindUniqueSchema } from "../schemas/findUniqueComment.schema";
import { CommentFindFirstSchema } from "../schemas/findFirstComment.schema";
import { CommentFindManySchema } from "../schemas/findManyComment.schema";
import { CommentCreateOneSchema } from "../schemas/createOneComment.schema";
import { CommentCreateManySchema } from "../schemas/createManyComment.schema";
import { CommentDeleteOneSchema } from "../schemas/deleteOneComment.schema";
import { CommentUpdateOneSchema } from "../schemas/updateOneComment.schema";
import { CommentDeleteManySchema } from "../schemas/deleteManyComment.schema";
import { CommentUpdateManySchema } from "../schemas/updateManyComment.schema";
import { CommentUpsertSchema } from "../schemas/upsertOneComment.schema";
import { CommentAggregateSchema } from "../schemas/aggregateComment.schema";
import { CommentGroupBySchema } from "../schemas/groupByComment.schema";
import { CommentFindRawObjectSchema } from "../schemas/objects/CommentFindRaw.schema";
import { CommentAggregateRawObjectSchema } from "../schemas/objects/CommentAggregateRaw.schema";

export const commentsRouter = createRouter()

  .query("aggregateComment", {
    input: CommentAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateComment = await ctx.prisma.comment.aggregate(input);
      return aggregateComment;
    },
  })

  .query("aggregateCommentRaw", {
    input: CommentAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateCommentRaw = await ctx.prisma.comment.aggregateRaw(input);
      return aggregateCommentRaw;
    },
  })

  .mutation("createManyComment", {
    input: CommentCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyComment = await ctx.prisma.comment.createMany(input);
      return createManyComment;
    },
  })

  .mutation("createOneComment", {
    input: CommentCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneComment = await ctx.prisma.comment.create(input);
      return createOneComment;
    },
  })

  .mutation("deleteManyComment", {
    input: CommentDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyComment = await ctx.prisma.comment.deleteMany(input);
      return deleteManyComment;
    },
  })

  .mutation("deleteOneComment", {
    input: CommentDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneComment = await ctx.prisma.comment.delete(input);
      return deleteOneComment;
    },
  })

  .query("findFirstComment", {
    input: CommentFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstComment = await ctx.prisma.comment.findFirst(input);
      return findFirstComment;
    },
  })

  .query("findFirstCommentOrThrow", {
    input: CommentFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstCommentOrThrow = await ctx.prisma.comment.findFirstOrThrow(input);
      return findFirstCommentOrThrow;
    },
  })

  .query("findManyComment", {
    input: CommentFindManySchema,
    async resolve({ ctx, input }) {
      const findManyComment = await ctx.prisma.comment.findMany(input);
      return findManyComment;
    },
  })

  .query("findCommentRaw", {
    input: CommentFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findCommentRaw = await ctx.prisma.comment.findRaw(input);
      return findCommentRaw;
    },
  })

  .query("findUniqueComment", {
    input: CommentFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueComment = await ctx.prisma.comment.findUnique(input);
      return findUniqueComment;
    },
  })

  .query("findUniqueCommentOrThrow", {
    input: CommentFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueCommentOrThrow = await ctx.prisma.comment.findUniqueOrThrow(input);
      return findUniqueCommentOrThrow;
    },
  })

  .query("groupByComment", {
    input: CommentGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByComment = await ctx.prisma.comment.groupBy(input);
      return groupByComment;
    },
  })

  .mutation("updateManyComment", {
    input: CommentUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyComment = await ctx.prisma.comment.updateMany(input);
      return updateManyComment;
    },
  })

  .mutation("updateOneComment", {
    input: CommentUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneComment = await ctx.prisma.comment.update(input);
      return updateOneComment;
    },
  })

  .mutation("upsertOneComment", {
    input: CommentUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneComment = await ctx.prisma.comment.upsert(input);
      return upsertOneComment;
    },
  })
