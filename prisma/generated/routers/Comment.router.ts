import { t, publicProcedure } from "./helpers/createRouter";
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
  aggregateComment: publicProcedure
    .input(CommentAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateComment = await ctx.prisma.comment.aggregate(input);
      return aggregateComment;
    }),
  aggregateCommentRaw: publicProcedure
    .input(CommentAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateCommentRaw = await ctx.prisma.comment.aggregateRaw(input);
      return aggregateCommentRaw;
    }),
  createManyComment: publicProcedure
    .input(CommentCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyComment = await ctx.prisma.comment.createMany(input);
      return createManyComment;
    }),
  createOneComment: publicProcedure
    .input(CommentCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneComment = await ctx.prisma.comment.create(input);
      return createOneComment;
    }),
  deleteManyComment: publicProcedure
    .input(CommentDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyComment = await ctx.prisma.comment.deleteMany(input);
      return deleteManyComment;
    }),
  deleteOneComment: publicProcedure
    .input(CommentDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneComment = await ctx.prisma.comment.delete(input);
      return deleteOneComment;
    }),
  findFirstComment: publicProcedure
    .input(CommentFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstComment = await ctx.prisma.comment.findFirst(input);
      return findFirstComment;
    }),
  findFirstCommentOrThrow: publicProcedure
    .input(CommentFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstCommentOrThrow = await ctx.prisma.comment.findFirstOrThrow(input);
      return findFirstCommentOrThrow;
    }),
  findManyComment: publicProcedure
    .input(CommentFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyComment = await ctx.prisma.comment.findMany(input);
      return findManyComment;
    }),
  findCommentRaw: publicProcedure
    .input(CommentFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findCommentRaw = await ctx.prisma.comment.findRaw(input);
      return findCommentRaw;
    }),
  findUniqueComment: publicProcedure
    .input(CommentFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueComment = await ctx.prisma.comment.findUnique(input);
      return findUniqueComment;
    }),
  findUniqueCommentOrThrow: publicProcedure
    .input(CommentFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueCommentOrThrow = await ctx.prisma.comment.findUniqueOrThrow(input);
      return findUniqueCommentOrThrow;
    }),
  groupByComment: publicProcedure
    .input(CommentGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByComment = await ctx.prisma.comment.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByComment;
    }),
  updateManyComment: publicProcedure
    .input(CommentUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyComment = await ctx.prisma.comment.updateMany(input);
      return updateManyComment;
    }),
  updateOneComment: publicProcedure
    .input(CommentUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneComment = await ctx.prisma.comment.update(input);
      return updateOneComment;
    }),
  upsertOneComment: publicProcedure
    .input(CommentUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneComment = await ctx.prisma.comment.upsert(input);
      return upsertOneComment;
    }),

})
