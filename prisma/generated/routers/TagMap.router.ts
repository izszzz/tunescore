import { t, shieldedProcedure } from "./helpers/createRouter";
import { TagMapFindUniqueSchema } from "../schemas/findUniqueTagMap.schema";
import { TagMapFindFirstSchema } from "../schemas/findFirstTagMap.schema";
import { TagMapFindManySchema } from "../schemas/findManyTagMap.schema";
import { TagMapCreateOneSchema } from "../schemas/createOneTagMap.schema";
import { TagMapCreateManySchema } from "../schemas/createManyTagMap.schema";
import { TagMapDeleteOneSchema } from "../schemas/deleteOneTagMap.schema";
import { TagMapUpdateOneSchema } from "../schemas/updateOneTagMap.schema";
import { TagMapDeleteManySchema } from "../schemas/deleteManyTagMap.schema";
import { TagMapUpdateManySchema } from "../schemas/updateManyTagMap.schema";
import { TagMapUpsertSchema } from "../schemas/upsertOneTagMap.schema";
import { TagMapAggregateSchema } from "../schemas/aggregateTagMap.schema";
import { TagMapGroupBySchema } from "../schemas/groupByTagMap.schema";
import { TagMapFindRawObjectSchema } from "../schemas/objects/TagMapFindRaw.schema";
import { TagMapAggregateRawObjectSchema } from "../schemas/objects/TagMapAggregateRaw.schema";

export const tagmapsRouter = t.router({
  aggregateTagMap: shieldedProcedure
    .input(TagMapAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateTagMap = await ctx.prisma.tagMap.aggregate(input);
      return aggregateTagMap;
    }),
  aggregateTagMapRaw: shieldedProcedure
    .input(TagMapAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateTagMapRaw = await ctx.prisma.tagMap.aggregateRaw(input);
      return aggregateTagMapRaw;
    }),
  createManyTagMap: shieldedProcedure
    .input(TagMapCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyTagMap = await ctx.prisma.tagMap.createMany(input);
      return createManyTagMap;
    }),
  createOneTagMap: shieldedProcedure
    .input(TagMapCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneTagMap = await ctx.prisma.tagMap.create(input);
      return createOneTagMap;
    }),
  deleteManyTagMap: shieldedProcedure
    .input(TagMapDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyTagMap = await ctx.prisma.tagMap.deleteMany(input);
      return deleteManyTagMap;
    }),
  deleteOneTagMap: shieldedProcedure
    .input(TagMapDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneTagMap = await ctx.prisma.tagMap.delete(input);
      return deleteOneTagMap;
    }),
  findFirstTagMap: shieldedProcedure
    .input(TagMapFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstTagMap = await ctx.prisma.tagMap.findFirst(input);
      return findFirstTagMap;
    }),
  findFirstTagMapOrThrow: shieldedProcedure
    .input(TagMapFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstTagMapOrThrow = await ctx.prisma.tagMap.findFirstOrThrow(input);
      return findFirstTagMapOrThrow;
    }),
  findManyTagMap: shieldedProcedure
    .input(TagMapFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyTagMap = await ctx.prisma.tagMap.findMany(input);
      return findManyTagMap;
    }),
  findTagMapRaw: shieldedProcedure
    .input(TagMapFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findTagMapRaw = await ctx.prisma.tagMap.findRaw(input);
      return findTagMapRaw;
    }),
  findUniqueTagMap: shieldedProcedure
    .input(TagMapFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueTagMap = await ctx.prisma.tagMap.findUnique(input);
      return findUniqueTagMap;
    }),
  findUniqueTagMapOrThrow: shieldedProcedure
    .input(TagMapFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueTagMapOrThrow = await ctx.prisma.tagMap.findUniqueOrThrow(input);
      return findUniqueTagMapOrThrow;
    }),
  groupByTagMap: shieldedProcedure
    .input(TagMapGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByTagMap = await ctx.prisma.tagMap.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTagMap;
    }),
  updateManyTagMap: shieldedProcedure
    .input(TagMapUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyTagMap = await ctx.prisma.tagMap.updateMany(input);
      return updateManyTagMap;
    }),
  updateOneTagMap: shieldedProcedure
    .input(TagMapUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneTagMap = await ctx.prisma.tagMap.update(input);
      return updateOneTagMap;
    }),
  upsertOneTagMap: shieldedProcedure
    .input(TagMapUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneTagMap = await ctx.prisma.tagMap.upsert(input);
      return upsertOneTagMap;
    }),

})
