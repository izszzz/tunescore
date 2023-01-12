import { t, publicProcedure } from "./helpers/createRouter";
import { TagFindUniqueSchema } from "../schemas/findUniqueTag.schema";
import { TagFindFirstSchema } from "../schemas/findFirstTag.schema";
import { TagFindManySchema } from "../schemas/findManyTag.schema";
import { TagCreateOneSchema } from "../schemas/createOneTag.schema";
import { TagCreateManySchema } from "../schemas/createManyTag.schema";
import { TagDeleteOneSchema } from "../schemas/deleteOneTag.schema";
import { TagUpdateOneSchema } from "../schemas/updateOneTag.schema";
import { TagDeleteManySchema } from "../schemas/deleteManyTag.schema";
import { TagUpdateManySchema } from "../schemas/updateManyTag.schema";
import { TagUpsertSchema } from "../schemas/upsertOneTag.schema";
import { TagAggregateSchema } from "../schemas/aggregateTag.schema";
import { TagGroupBySchema } from "../schemas/groupByTag.schema";
import { TagFindRawObjectSchema } from "../schemas/objects/TagFindRaw.schema";
import { TagAggregateRawObjectSchema } from "../schemas/objects/TagAggregateRaw.schema";

export const tagsRouter = t.router({
  aggregateTag: publicProcedure
    .input(TagAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateTag = await ctx.prisma.tag.aggregate(input);
      return aggregateTag;
    }),
  aggregateTagRaw: publicProcedure
    .input(TagAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateTagRaw = await ctx.prisma.tag.aggregateRaw(input);
      return aggregateTagRaw;
    }),
  createManyTag: publicProcedure
    .input(TagCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyTag = await ctx.prisma.tag.createMany(input);
      return createManyTag;
    }),
  createOneTag: publicProcedure
    .input(TagCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneTag = await ctx.prisma.tag.create(input);
      return createOneTag;
    }),
  deleteManyTag: publicProcedure
    .input(TagDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyTag = await ctx.prisma.tag.deleteMany(input);
      return deleteManyTag;
    }),
  deleteOneTag: publicProcedure
    .input(TagDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneTag = await ctx.prisma.tag.delete(input);
      return deleteOneTag;
    }),
  findFirstTag: publicProcedure
    .input(TagFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstTag = await ctx.prisma.tag.findFirst(input);
      return findFirstTag;
    }),
  findFirstTagOrThrow: publicProcedure
    .input(TagFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstTagOrThrow = await ctx.prisma.tag.findFirstOrThrow(input);
      return findFirstTagOrThrow;
    }),
  findManyTag: publicProcedure
    .input(TagFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyTag = await ctx.prisma.tag.findMany(input);
      return findManyTag;
    }),
  findTagRaw: publicProcedure
    .input(TagFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findTagRaw = await ctx.prisma.tag.findRaw(input);
      return findTagRaw;
    }),
  findUniqueTag: publicProcedure
    .input(TagFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueTag = await ctx.prisma.tag.findUnique(input);
      return findUniqueTag;
    }),
  findUniqueTagOrThrow: publicProcedure
    .input(TagFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueTagOrThrow = await ctx.prisma.tag.findUniqueOrThrow(input);
      return findUniqueTagOrThrow;
    }),
  groupByTag: publicProcedure
    .input(TagGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByTag = await ctx.prisma.tag.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTag;
    }),
  updateManyTag: publicProcedure
    .input(TagUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyTag = await ctx.prisma.tag.updateMany(input);
      return updateManyTag;
    }),
  updateOneTag: publicProcedure
    .input(TagUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneTag = await ctx.prisma.tag.update(input);
      return updateOneTag;
    }),
  upsertOneTag: publicProcedure
    .input(TagUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneTag = await ctx.prisma.tag.upsert(input);
      return upsertOneTag;
    }),

})
