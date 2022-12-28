import { createRouter } from "./helpers/createRouter";
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

export const tagsRouter = createRouter()

  .query("aggregateTag", {
    input: TagAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateTag = await ctx.prisma.tag.aggregate(input);
      return aggregateTag;
    },
  })

  .query("aggregateTagRaw", {
    input: TagAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateTagRaw = await ctx.prisma.tag.aggregateRaw(input);
      return aggregateTagRaw;
    },
  })

  .mutation("createManyTag", {
    input: TagCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyTag = await ctx.prisma.tag.createMany(input);
      return createManyTag;
    },
  })

  .mutation("createOneTag", {
    input: TagCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneTag = await ctx.prisma.tag.create(input);
      return createOneTag;
    },
  })

  .mutation("deleteManyTag", {
    input: TagDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyTag = await ctx.prisma.tag.deleteMany(input);
      return deleteManyTag;
    },
  })

  .mutation("deleteOneTag", {
    input: TagDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneTag = await ctx.prisma.tag.delete(input);
      return deleteOneTag;
    },
  })

  .query("findFirstTag", {
    input: TagFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstTag = await ctx.prisma.tag.findFirst(input);
      return findFirstTag;
    },
  })

  .query("findFirstTagOrThrow", {
    input: TagFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstTagOrThrow = await ctx.prisma.tag.findFirstOrThrow(input);
      return findFirstTagOrThrow;
    },
  })

  .query("findManyTag", {
    input: TagFindManySchema,
    async resolve({ ctx, input }) {
      const findManyTag = await ctx.prisma.tag.findMany(input);
      return findManyTag;
    },
  })

  .query("findTagRaw", {
    input: TagFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findTagRaw = await ctx.prisma.tag.findRaw(input);
      return findTagRaw;
    },
  })

  .query("findUniqueTag", {
    input: TagFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueTag = await ctx.prisma.tag.findUnique(input);
      return findUniqueTag;
    },
  })

  .query("findUniqueTagOrThrow", {
    input: TagFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueTagOrThrow = await ctx.prisma.tag.findUniqueOrThrow(input);
      return findUniqueTagOrThrow;
    },
  })

  .query("groupByTag", {
    input: TagGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByTag = await ctx.prisma.tag.groupBy(input);
      return groupByTag;
    },
  })

  .mutation("updateManyTag", {
    input: TagUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyTag = await ctx.prisma.tag.updateMany(input);
      return updateManyTag;
    },
  })

  .mutation("updateOneTag", {
    input: TagUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneTag = await ctx.prisma.tag.update(input);
      return updateOneTag;
    },
  })

  .mutation("upsertOneTag", {
    input: TagUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneTag = await ctx.prisma.tag.upsert(input);
      return upsertOneTag;
    },
  })
