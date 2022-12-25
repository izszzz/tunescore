import { createRouter } from "./helpers/createRouter";
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

export const followsRouter = createRouter()

  .query("aggregateFollow", {
    input: FollowAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateFollow = await ctx.prisma.follow.aggregate(input);
      return aggregateFollow;
    },
  })

  .query("aggregateFollowRaw", {
    input: FollowAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateFollowRaw = await ctx.prisma.follow.aggregateRaw(input);
      return aggregateFollowRaw;
    },
  })

  .mutation("createManyFollow", {
    input: FollowCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyFollow = await ctx.prisma.follow.createMany(input);
      return createManyFollow;
    },
  })

  .mutation("createOneFollow", {
    input: FollowCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneFollow = await ctx.prisma.follow.create(input);
      return createOneFollow;
    },
  })

  .mutation("deleteManyFollow", {
    input: FollowDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyFollow = await ctx.prisma.follow.deleteMany(input);
      return deleteManyFollow;
    },
  })

  .mutation("deleteOneFollow", {
    input: FollowDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneFollow = await ctx.prisma.follow.delete(input);
      return deleteOneFollow;
    },
  })

  .query("findFirstFollow", {
    input: FollowFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstFollow = await ctx.prisma.follow.findFirst(input);
      return findFirstFollow;
    },
  })

  .query("findFirstFollowOrThrow", {
    input: FollowFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstFollowOrThrow = await ctx.prisma.follow.findFirstOrThrow(input);
      return findFirstFollowOrThrow;
    },
  })

  .query("findManyFollow", {
    input: FollowFindManySchema,
    async resolve({ ctx, input }) {
      const findManyFollow = await ctx.prisma.follow.findMany(input);
      return findManyFollow;
    },
  })

  .query("findFollowRaw", {
    input: FollowFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findFollowRaw = await ctx.prisma.follow.findRaw(input);
      return findFollowRaw;
    },
  })

  .query("findUniqueFollow", {
    input: FollowFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueFollow = await ctx.prisma.follow.findUnique(input);
      return findUniqueFollow;
    },
  })

  .query("findUniqueFollowOrThrow", {
    input: FollowFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueFollowOrThrow = await ctx.prisma.follow.findUniqueOrThrow(input);
      return findUniqueFollowOrThrow;
    },
  })

  .query("groupByFollow", {
    input: FollowGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByFollow = await ctx.prisma.follow.groupBy(input);
      return groupByFollow;
    },
  })

  .mutation("updateManyFollow", {
    input: FollowUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyFollow = await ctx.prisma.follow.updateMany(input);
      return updateManyFollow;
    },
  })

  .mutation("updateOneFollow", {
    input: FollowUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneFollow = await ctx.prisma.follow.update(input);
      return updateOneFollow;
    },
  })

  .mutation("upsertOneFollow", {
    input: FollowUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneFollow = await ctx.prisma.follow.upsert(input);
      return upsertOneFollow;
    },
  })
