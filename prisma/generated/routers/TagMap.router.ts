import { createRouter } from "./helpers/createRouter";
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

export const tagmapsRouter = createRouter()

  .query("aggregateTagMap", {
    input: TagMapAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateTagMap = await ctx.prisma.tagMap.aggregate(input);
      return aggregateTagMap;
    },
  })

  .query("aggregateTagMapRaw", {
    input: TagMapAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateTagMapRaw = await ctx.prisma.tagMap.aggregateRaw(input);
      return aggregateTagMapRaw;
    },
  })

  .mutation("createManyTagMap", {
    input: TagMapCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyTagMap = await ctx.prisma.tagMap.createMany(input);
      return createManyTagMap;
    },
  })

  .mutation("createOneTagMap", {
    input: TagMapCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneTagMap = await ctx.prisma.tagMap.create(input);
      return createOneTagMap;
    },
  })

  .mutation("deleteManyTagMap", {
    input: TagMapDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyTagMap = await ctx.prisma.tagMap.deleteMany(input);
      return deleteManyTagMap;
    },
  })

  .mutation("deleteOneTagMap", {
    input: TagMapDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneTagMap = await ctx.prisma.tagMap.delete(input);
      return deleteOneTagMap;
    },
  })

  .query("findFirstTagMap", {
    input: TagMapFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstTagMap = await ctx.prisma.tagMap.findFirst(input);
      return findFirstTagMap;
    },
  })

  .query("findFirstTagMapOrThrow", {
    input: TagMapFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstTagMapOrThrow = await ctx.prisma.tagMap.findFirstOrThrow(input);
      return findFirstTagMapOrThrow;
    },
  })

  .query("findManyTagMap", {
    input: TagMapFindManySchema,
    async resolve({ ctx, input }) {
      const findManyTagMap = await ctx.prisma.tagMap.findMany(input);
      return findManyTagMap;
    },
  })

  .query("findTagMapRaw", {
    input: TagMapFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findTagMapRaw = await ctx.prisma.tagMap.findRaw(input);
      return findTagMapRaw;
    },
  })

  .query("findUniqueTagMap", {
    input: TagMapFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueTagMap = await ctx.prisma.tagMap.findUnique(input);
      return findUniqueTagMap;
    },
  })

  .query("findUniqueTagMapOrThrow", {
    input: TagMapFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueTagMapOrThrow = await ctx.prisma.tagMap.findUniqueOrThrow(input);
      return findUniqueTagMapOrThrow;
    },
  })

  .query("groupByTagMap", {
    input: TagMapGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByTagMap = await ctx.prisma.tagMap.groupBy(input);
      return groupByTagMap;
    },
  })

  .mutation("updateManyTagMap", {
    input: TagMapUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyTagMap = await ctx.prisma.tagMap.updateMany(input);
      return updateManyTagMap;
    },
  })

  .mutation("updateOneTagMap", {
    input: TagMapUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneTagMap = await ctx.prisma.tagMap.update(input);
      return updateOneTagMap;
    },
  })

  .mutation("upsertOneTagMap", {
    input: TagMapUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneTagMap = await ctx.prisma.tagMap.upsert(input);
      return upsertOneTagMap;
    },
  })
