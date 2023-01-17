import { t, publicProcedure } from "./helpers/createRouter";
import { PointFindUniqueSchema } from "../schemas/findUniquePoint.schema";
import { PointFindFirstSchema } from "../schemas/findFirstPoint.schema";
import { PointFindManySchema } from "../schemas/findManyPoint.schema";
import { PointCreateOneSchema } from "../schemas/createOnePoint.schema";
import { PointCreateManySchema } from "../schemas/createManyPoint.schema";
import { PointDeleteOneSchema } from "../schemas/deleteOnePoint.schema";
import { PointUpdateOneSchema } from "../schemas/updateOnePoint.schema";
import { PointDeleteManySchema } from "../schemas/deleteManyPoint.schema";
import { PointUpdateManySchema } from "../schemas/updateManyPoint.schema";
import { PointUpsertSchema } from "../schemas/upsertOnePoint.schema";
import { PointAggregateSchema } from "../schemas/aggregatePoint.schema";
import { PointGroupBySchema } from "../schemas/groupByPoint.schema";
import { PointFindRawObjectSchema } from "../schemas/objects/PointFindRaw.schema";
import { PointAggregateRawObjectSchema } from "../schemas/objects/PointAggregateRaw.schema";

export const pointsRouter = t.router({
  aggregatePoint: publicProcedure
    .input(PointAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregatePoint = await ctx.prisma.point.aggregate(input);
      return aggregatePoint;
    }),
  aggregatePointRaw: publicProcedure
    .input(PointAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregatePointRaw = await ctx.prisma.point.aggregateRaw(input);
      return aggregatePointRaw;
    }),
  createManyPoint: publicProcedure
    .input(PointCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyPoint = await ctx.prisma.point.createMany(input);
      return createManyPoint;
    }),
  createOnePoint: publicProcedure
    .input(PointCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOnePoint = await ctx.prisma.point.create(input);
      return createOnePoint;
    }),
  deleteManyPoint: publicProcedure
    .input(PointDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyPoint = await ctx.prisma.point.deleteMany(input);
      return deleteManyPoint;
    }),
  deleteOnePoint: publicProcedure
    .input(PointDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOnePoint = await ctx.prisma.point.delete(input);
      return deleteOnePoint;
    }),
  findFirstPoint: publicProcedure
    .input(PointFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstPoint = await ctx.prisma.point.findFirst(input);
      return findFirstPoint;
    }),
  findFirstPointOrThrow: publicProcedure
    .input(PointFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstPointOrThrow = await ctx.prisma.point.findFirstOrThrow(input);
      return findFirstPointOrThrow;
    }),
  findManyPoint: publicProcedure
    .input(PointFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyPoint = await ctx.prisma.point.findMany(input);
      return findManyPoint;
    }),
  findPointRaw: publicProcedure
    .input(PointFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findPointRaw = await ctx.prisma.point.findRaw(input);
      return findPointRaw;
    }),
  findUniquePoint: publicProcedure
    .input(PointFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniquePoint = await ctx.prisma.point.findUnique(input);
      return findUniquePoint;
    }),
  findUniquePointOrThrow: publicProcedure
    .input(PointFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniquePointOrThrow = await ctx.prisma.point.findUniqueOrThrow(input);
      return findUniquePointOrThrow;
    }),
  groupByPoint: publicProcedure
    .input(PointGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByPoint = await ctx.prisma.point.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPoint;
    }),
  updateManyPoint: publicProcedure
    .input(PointUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyPoint = await ctx.prisma.point.updateMany(input);
      return updateManyPoint;
    }),
  updateOnePoint: publicProcedure
    .input(PointUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOnePoint = await ctx.prisma.point.update(input);
      return updateOnePoint;
    }),
  upsertOnePoint: publicProcedure
    .input(PointUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOnePoint = await ctx.prisma.point.upsert(input);
      return upsertOnePoint;
    }),

})
