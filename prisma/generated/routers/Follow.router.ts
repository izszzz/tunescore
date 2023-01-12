import { t, publicProcedure } from "./helpers/createRouter";
import { FollowFindUniqueSchema } from "../schemas/findUniqueFollow.schema";
import { FollowFindFirstSchema } from "../schemas/findFirstFollow.schema";
import { FollowFindManySchema } from "../schemas/findManyFollow.schema";
import { FollowCreateOneSchema } from "../schemas/createOneFollow.schema";
import { FollowCreateManySchema } from "../schemas/createManyFollow.schema";
import { FollowDeleteOneSchema } from "../schemas/deleteOneFollow.schema";
import { FollowUpdateOneSchema } from "../schemas/updateOneFollow.schema";
import { FollowDeleteManySchema } from "../schemas/deleteManyFollow.schema";
import { FollowUpdateManySchema } from "../schemas/updateManyFollow.schema";
import { FollowUpsertSchema } from "../schemas/upsertOneFollow.schema";
import { FollowAggregateSchema } from "../schemas/aggregateFollow.schema";
import { FollowGroupBySchema } from "../schemas/groupByFollow.schema";
import { FollowFindRawObjectSchema } from "../schemas/objects/FollowFindRaw.schema";
import { FollowAggregateRawObjectSchema } from "../schemas/objects/FollowAggregateRaw.schema";

export const followsRouter = t.router({
  aggregateFollow: publicProcedure
    .input(FollowAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateFollow = await ctx.prisma.follow.aggregate(input);
      return aggregateFollow;
    }),
  aggregateFollowRaw: publicProcedure
    .input(FollowAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateFollowRaw = await ctx.prisma.follow.aggregateRaw(input);
      return aggregateFollowRaw;
    }),
  createManyFollow: publicProcedure
    .input(FollowCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyFollow = await ctx.prisma.follow.createMany(input);
      return createManyFollow;
    }),
  createOneFollow: publicProcedure
    .input(FollowCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneFollow = await ctx.prisma.follow.create(input);
      return createOneFollow;
    }),
  deleteManyFollow: publicProcedure
    .input(FollowDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyFollow = await ctx.prisma.follow.deleteMany(input);
      return deleteManyFollow;
    }),
  deleteOneFollow: publicProcedure
    .input(FollowDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneFollow = await ctx.prisma.follow.delete(input);
      return deleteOneFollow;
    }),
  findFirstFollow: publicProcedure
    .input(FollowFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstFollow = await ctx.prisma.follow.findFirst(input);
      return findFirstFollow;
    }),
  findFirstFollowOrThrow: publicProcedure
    .input(FollowFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstFollowOrThrow = await ctx.prisma.follow.findFirstOrThrow(input);
      return findFirstFollowOrThrow;
    }),
  findManyFollow: publicProcedure
    .input(FollowFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyFollow = await ctx.prisma.follow.findMany(input);
      return findManyFollow;
    }),
  findFollowRaw: publicProcedure
    .input(FollowFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findFollowRaw = await ctx.prisma.follow.findRaw(input);
      return findFollowRaw;
    }),
  findUniqueFollow: publicProcedure
    .input(FollowFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueFollow = await ctx.prisma.follow.findUnique(input);
      return findUniqueFollow;
    }),
  findUniqueFollowOrThrow: publicProcedure
    .input(FollowFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueFollowOrThrow = await ctx.prisma.follow.findUniqueOrThrow(input);
      return findUniqueFollowOrThrow;
    }),
  groupByFollow: publicProcedure
    .input(FollowGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByFollow = await ctx.prisma.follow.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByFollow;
    }),
  updateManyFollow: publicProcedure
    .input(FollowUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyFollow = await ctx.prisma.follow.updateMany(input);
      return updateManyFollow;
    }),
  updateOneFollow: publicProcedure
    .input(FollowUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneFollow = await ctx.prisma.follow.update(input);
      return updateOneFollow;
    }),
  upsertOneFollow: publicProcedure
    .input(FollowUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneFollow = await ctx.prisma.follow.upsert(input);
      return upsertOneFollow;
    }),

})
