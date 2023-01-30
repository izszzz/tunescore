import { t, shieldedProcedure } from "./helpers/createRouter";
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
  aggregateFollow: shieldedProcedure
    .input(FollowAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateFollow = await ctx.prisma.follow.aggregate(input);
      return aggregateFollow;
    }),
  aggregateFollowRaw: shieldedProcedure
    .input(FollowAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateFollowRaw = await ctx.prisma.follow.aggregateRaw(input);
      return aggregateFollowRaw;
    }),
  createManyFollow: shieldedProcedure
    .input(FollowCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyFollow = await ctx.prisma.follow.createMany(input);
      return createManyFollow;
    }),
  createOneFollow: shieldedProcedure
    .input(FollowCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneFollow = await ctx.prisma.follow.create(input);
      return createOneFollow;
    }),
  deleteManyFollow: shieldedProcedure
    .input(FollowDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyFollow = await ctx.prisma.follow.deleteMany(input);
      return deleteManyFollow;
    }),
  deleteOneFollow: shieldedProcedure
    .input(FollowDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneFollow = await ctx.prisma.follow.delete(input);
      return deleteOneFollow;
    }),
  findFirstFollow: shieldedProcedure
    .input(FollowFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstFollow = await ctx.prisma.follow.findFirst(input);
      return findFirstFollow;
    }),
  findFirstFollowOrThrow: shieldedProcedure
    .input(FollowFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstFollowOrThrow = await ctx.prisma.follow.findFirstOrThrow(input);
      return findFirstFollowOrThrow;
    }),
  findManyFollow: shieldedProcedure
    .input(FollowFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyFollow = await ctx.prisma.follow.findMany(input);
      return findManyFollow;
    }),
  findFollowRaw: shieldedProcedure
    .input(FollowFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findFollowRaw = await ctx.prisma.follow.findRaw(input);
      return findFollowRaw;
    }),
  findUniqueFollow: shieldedProcedure
    .input(FollowFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueFollow = await ctx.prisma.follow.findUnique(input);
      return findUniqueFollow;
    }),
  findUniqueFollowOrThrow: shieldedProcedure
    .input(FollowFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueFollowOrThrow = await ctx.prisma.follow.findUniqueOrThrow(input);
      return findUniqueFollowOrThrow;
    }),
  groupByFollow: shieldedProcedure
    .input(FollowGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByFollow = await ctx.prisma.follow.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByFollow;
    }),
  updateManyFollow: shieldedProcedure
    .input(FollowUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyFollow = await ctx.prisma.follow.updateMany(input);
      return updateManyFollow;
    }),
  updateOneFollow: shieldedProcedure
    .input(FollowUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneFollow = await ctx.prisma.follow.update(input);
      return updateOneFollow;
    }),
  upsertOneFollow: shieldedProcedure
    .input(FollowUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneFollow = await ctx.prisma.follow.upsert(input);
      return upsertOneFollow;
    }),

})
