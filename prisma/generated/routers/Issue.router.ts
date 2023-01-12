import { t, publicProcedure } from "./helpers/createRouter";
import { IssueFindUniqueSchema } from "../schemas/findUniqueIssue.schema";
import { IssueFindFirstSchema } from "../schemas/findFirstIssue.schema";
import { IssueFindManySchema } from "../schemas/findManyIssue.schema";
import { IssueCreateOneSchema } from "../schemas/createOneIssue.schema";
import { IssueCreateManySchema } from "../schemas/createManyIssue.schema";
import { IssueDeleteOneSchema } from "../schemas/deleteOneIssue.schema";
import { IssueUpdateOneSchema } from "../schemas/updateOneIssue.schema";
import { IssueDeleteManySchema } from "../schemas/deleteManyIssue.schema";
import { IssueUpdateManySchema } from "../schemas/updateManyIssue.schema";
import { IssueUpsertSchema } from "../schemas/upsertOneIssue.schema";
import { IssueAggregateSchema } from "../schemas/aggregateIssue.schema";
import { IssueGroupBySchema } from "../schemas/groupByIssue.schema";
import { IssueFindRawObjectSchema } from "../schemas/objects/IssueFindRaw.schema";
import { IssueAggregateRawObjectSchema } from "../schemas/objects/IssueAggregateRaw.schema";

export const issuesRouter = t.router({
  aggregateIssue: publicProcedure
    .input(IssueAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateIssue = await ctx.prisma.issue.aggregate(input);
      return aggregateIssue;
    }),
  aggregateIssueRaw: publicProcedure
    .input(IssueAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateIssueRaw = await ctx.prisma.issue.aggregateRaw(input);
      return aggregateIssueRaw;
    }),
  createManyIssue: publicProcedure
    .input(IssueCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyIssue = await ctx.prisma.issue.createMany(input);
      return createManyIssue;
    }),
  createOneIssue: publicProcedure
    .input(IssueCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneIssue = await ctx.prisma.issue.create(input);
      return createOneIssue;
    }),
  deleteManyIssue: publicProcedure
    .input(IssueDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyIssue = await ctx.prisma.issue.deleteMany(input);
      return deleteManyIssue;
    }),
  deleteOneIssue: publicProcedure
    .input(IssueDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneIssue = await ctx.prisma.issue.delete(input);
      return deleteOneIssue;
    }),
  findFirstIssue: publicProcedure
    .input(IssueFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstIssue = await ctx.prisma.issue.findFirst(input);
      return findFirstIssue;
    }),
  findFirstIssueOrThrow: publicProcedure
    .input(IssueFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstIssueOrThrow = await ctx.prisma.issue.findFirstOrThrow(input);
      return findFirstIssueOrThrow;
    }),
  findManyIssue: publicProcedure
    .input(IssueFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyIssue = await ctx.prisma.issue.findMany(input);
      return findManyIssue;
    }),
  findIssueRaw: publicProcedure
    .input(IssueFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findIssueRaw = await ctx.prisma.issue.findRaw(input);
      return findIssueRaw;
    }),
  findUniqueIssue: publicProcedure
    .input(IssueFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueIssue = await ctx.prisma.issue.findUnique(input);
      return findUniqueIssue;
    }),
  findUniqueIssueOrThrow: publicProcedure
    .input(IssueFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueIssueOrThrow = await ctx.prisma.issue.findUniqueOrThrow(input);
      return findUniqueIssueOrThrow;
    }),
  groupByIssue: publicProcedure
    .input(IssueGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByIssue = await ctx.prisma.issue.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByIssue;
    }),
  updateManyIssue: publicProcedure
    .input(IssueUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyIssue = await ctx.prisma.issue.updateMany(input);
      return updateManyIssue;
    }),
  updateOneIssue: publicProcedure
    .input(IssueUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneIssue = await ctx.prisma.issue.update(input);
      return updateOneIssue;
    }),
  upsertOneIssue: publicProcedure
    .input(IssueUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneIssue = await ctx.prisma.issue.upsert(input);
      return upsertOneIssue;
    }),

})
