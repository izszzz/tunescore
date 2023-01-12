import { t, publicProcedure } from "./helpers/createRouter";
import { PullFindUniqueSchema } from "../schemas/findUniquePull.schema";
import { PullFindFirstSchema } from "../schemas/findFirstPull.schema";
import { PullFindManySchema } from "../schemas/findManyPull.schema";
import { PullCreateOneSchema } from "../schemas/createOnePull.schema";
import { PullCreateManySchema } from "../schemas/createManyPull.schema";
import { PullDeleteOneSchema } from "../schemas/deleteOnePull.schema";
import { PullUpdateOneSchema } from "../schemas/updateOnePull.schema";
import { PullDeleteManySchema } from "../schemas/deleteManyPull.schema";
import { PullUpdateManySchema } from "../schemas/updateManyPull.schema";
import { PullUpsertSchema } from "../schemas/upsertOnePull.schema";
import { PullAggregateSchema } from "../schemas/aggregatePull.schema";
import { PullGroupBySchema } from "../schemas/groupByPull.schema";
import { PullFindRawObjectSchema } from "../schemas/objects/PullFindRaw.schema";
import { PullAggregateRawObjectSchema } from "../schemas/objects/PullAggregateRaw.schema";

export const pullsRouter = t.router({
  aggregatePull: publicProcedure
    .input(PullAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregatePull = await ctx.prisma.pull.aggregate(input);
      return aggregatePull;
    }),
  aggregatePullRaw: publicProcedure
    .input(PullAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregatePullRaw = await ctx.prisma.pull.aggregateRaw(input);
      return aggregatePullRaw;
    }),
  createManyPull: publicProcedure
    .input(PullCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyPull = await ctx.prisma.pull.createMany(input);
      return createManyPull;
    }),
  createOnePull: publicProcedure
    .input(PullCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOnePull = await ctx.prisma.pull.create(input);
      return createOnePull;
    }),
  deleteManyPull: publicProcedure
    .input(PullDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyPull = await ctx.prisma.pull.deleteMany(input);
      return deleteManyPull;
    }),
  deleteOnePull: publicProcedure
    .input(PullDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOnePull = await ctx.prisma.pull.delete(input);
      return deleteOnePull;
    }),
  findFirstPull: publicProcedure
    .input(PullFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstPull = await ctx.prisma.pull.findFirst(input);
      return findFirstPull;
    }),
  findFirstPullOrThrow: publicProcedure
    .input(PullFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstPullOrThrow = await ctx.prisma.pull.findFirstOrThrow(input);
      return findFirstPullOrThrow;
    }),
  findManyPull: publicProcedure
    .input(PullFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyPull = await ctx.prisma.pull.findMany(input);
      return findManyPull;
    }),
  findPullRaw: publicProcedure
    .input(PullFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findPullRaw = await ctx.prisma.pull.findRaw(input);
      return findPullRaw;
    }),
  findUniquePull: publicProcedure
    .input(PullFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniquePull = await ctx.prisma.pull.findUnique(input);
      return findUniquePull;
    }),
  findUniquePullOrThrow: publicProcedure
    .input(PullFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniquePullOrThrow = await ctx.prisma.pull.findUniqueOrThrow(input);
      return findUniquePullOrThrow;
    }),
  groupByPull: publicProcedure
    .input(PullGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByPull = await ctx.prisma.pull.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPull;
    }),
  updateManyPull: publicProcedure
    .input(PullUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyPull = await ctx.prisma.pull.updateMany(input);
      return updateManyPull;
    }),
  updateOnePull: publicProcedure
    .input(PullUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOnePull = await ctx.prisma.pull.update(input);
      return updateOnePull;
    }),
  upsertOnePull: publicProcedure
    .input(PullUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOnePull = await ctx.prisma.pull.upsert(input);
      return upsertOnePull;
    }),

})
