import { t, shieldedProcedure } from "./helpers/createRouter";
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

export const commentsRouter = t.router({
  aggregateComment: shieldedProcedure
    .input(CommentAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateComment = await ctx.prisma.comment.aggregate(input);
      return aggregateComment;
    }),
  aggregateCommentRaw: shieldedProcedure
    .input(CommentAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateCommentRaw = await ctx.prisma.comment.aggregateRaw(input);
      return aggregateCommentRaw;
    }),
  createManyComment: shieldedProcedure
    .input(CommentCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyComment = await ctx.prisma.comment.createMany(input);
      return createManyComment;
    }),
  createOneComment: shieldedProcedure
    .input(CommentCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneComment = await ctx.prisma.comment.create(input);
      return createOneComment;
    }),
  deleteManyComment: shieldedProcedure
    .input(CommentDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyComment = await ctx.prisma.comment.deleteMany(input);
      return deleteManyComment;
    }),
  deleteOneComment: shieldedProcedure
    .input(CommentDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneComment = await ctx.prisma.comment.delete(input);
      return deleteOneComment;
    }),
  findFirstComment: shieldedProcedure
    .input(CommentFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstComment = await ctx.prisma.comment.findFirst(input);
      return findFirstComment;
    }),
  findFirstCommentOrThrow: shieldedProcedure
    .input(CommentFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstCommentOrThrow = await ctx.prisma.comment.findFirstOrThrow(input);
      return findFirstCommentOrThrow;
    }),
  findManyComment: shieldedProcedure
    .input(CommentFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyComment = await ctx.prisma.comment.findMany(input);
      return findManyComment;
    }),
  findCommentRaw: shieldedProcedure
    .input(CommentFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findCommentRaw = await ctx.prisma.comment.findRaw(input);
      return findCommentRaw;
    }),
  findUniqueComment: shieldedProcedure
    .input(CommentFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueComment = await ctx.prisma.comment.findUnique(input);
      return findUniqueComment;
    }),
  findUniqueCommentOrThrow: shieldedProcedure
    .input(CommentFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueCommentOrThrow = await ctx.prisma.comment.findUniqueOrThrow(input);
      return findUniqueCommentOrThrow;
    }),
  groupByComment: shieldedProcedure
    .input(CommentGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByComment = await ctx.prisma.comment.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByComment;
    }),
  updateManyComment: shieldedProcedure
    .input(CommentUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyComment = await ctx.prisma.comment.updateMany(input);
      return updateManyComment;
    }),
  updateOneComment: shieldedProcedure
    .input(CommentUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneComment = await ctx.prisma.comment.update(input);
      return updateOneComment;
    }),
  upsertOneComment: shieldedProcedure
    .input(CommentUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneComment = await ctx.prisma.comment.upsert(input);
      return upsertOneComment;
    }),

})
