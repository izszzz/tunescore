import { createRouter } from "./helpers/createRouter";
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

export const issuesRouter = createRouter()

  .query("aggregateIssue", {
    input: IssueAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateIssue = await ctx.prisma.issue.aggregate(input);
      return aggregateIssue;
    },
  })

  .query("aggregateIssueRaw", {
    input: IssueAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateIssueRaw = await ctx.prisma.issue.aggregateRaw(input);
      return aggregateIssueRaw;
    },
  })

  .mutation("createManyIssue", {
    input: IssueCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyIssue = await ctx.prisma.issue.createMany(input);
      return createManyIssue;
    },
  })

  .mutation("createOneIssue", {
    input: IssueCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneIssue = await ctx.prisma.issue.create(input);
      return createOneIssue;
    },
  })

  .mutation("deleteManyIssue", {
    input: IssueDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyIssue = await ctx.prisma.issue.deleteMany(input);
      return deleteManyIssue;
    },
  })

  .mutation("deleteOneIssue", {
    input: IssueDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneIssue = await ctx.prisma.issue.delete(input);
      return deleteOneIssue;
    },
  })

  .query("findFirstIssue", {
    input: IssueFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstIssue = await ctx.prisma.issue.findFirst(input);
      return findFirstIssue;
    },
  })

  .query("findFirstIssueOrThrow", {
    input: IssueFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstIssueOrThrow = await ctx.prisma.issue.findFirstOrThrow(input);
      return findFirstIssueOrThrow;
    },
  })

  .query("findManyIssue", {
    input: IssueFindManySchema,
    async resolve({ ctx, input }) {
      const findManyIssue = await ctx.prisma.issue.findMany(input);
      return findManyIssue;
    },
  })

  .query("findIssueRaw", {
    input: IssueFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findIssueRaw = await ctx.prisma.issue.findRaw(input);
      return findIssueRaw;
    },
  })

  .query("findUniqueIssue", {
    input: IssueFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueIssue = await ctx.prisma.issue.findUnique(input);
      return findUniqueIssue;
    },
  })

  .query("findUniqueIssueOrThrow", {
    input: IssueFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueIssueOrThrow = await ctx.prisma.issue.findUniqueOrThrow(input);
      return findUniqueIssueOrThrow;
    },
  })

  .query("groupByIssue", {
    input: IssueGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByIssue = await ctx.prisma.issue.groupBy(input);
      return groupByIssue;
    },
  })

  .mutation("updateManyIssue", {
    input: IssueUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyIssue = await ctx.prisma.issue.updateMany(input);
      return updateManyIssue;
    },
  })

  .mutation("updateOneIssue", {
    input: IssueUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneIssue = await ctx.prisma.issue.update(input);
      return updateOneIssue;
    },
  })

  .mutation("upsertOneIssue", {
    input: IssueUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneIssue = await ctx.prisma.issue.upsert(input);
      return upsertOneIssue;
    },
  })
