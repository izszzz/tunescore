import { createRouter } from "./helpers/createRouter";
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

export const pullsRouter = createRouter()

  .query("aggregatePull", {
    input: PullAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregatePull = await ctx.prisma.pull.aggregate(input);
      return aggregatePull;
    },
  })

  .query("aggregatePullRaw", {
    input: PullAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregatePullRaw = await ctx.prisma.pull.aggregateRaw(input);
      return aggregatePullRaw;
    },
  })

  .mutation("createManyPull", {
    input: PullCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyPull = await ctx.prisma.pull.createMany(input);
      return createManyPull;
    },
  })

  .mutation("createOnePull", {
    input: PullCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOnePull = await ctx.prisma.pull.create(input);
      return createOnePull;
    },
  })

  .mutation("deleteManyPull", {
    input: PullDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyPull = await ctx.prisma.pull.deleteMany(input);
      return deleteManyPull;
    },
  })

  .mutation("deleteOnePull", {
    input: PullDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOnePull = await ctx.prisma.pull.delete(input);
      return deleteOnePull;
    },
  })

  .query("findFirstPull", {
    input: PullFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstPull = await ctx.prisma.pull.findFirst(input);
      return findFirstPull;
    },
  })

  .query("findFirstPullOrThrow", {
    input: PullFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstPullOrThrow = await ctx.prisma.pull.findFirstOrThrow(input);
      return findFirstPullOrThrow;
    },
  })

  .query("findManyPull", {
    input: PullFindManySchema,
    async resolve({ ctx, input }) {
      const findManyPull = await ctx.prisma.pull.findMany(input);
      return findManyPull;
    },
  })

  .query("findPullRaw", {
    input: PullFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findPullRaw = await ctx.prisma.pull.findRaw(input);
      return findPullRaw;
    },
  })

  .query("findUniquePull", {
    input: PullFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniquePull = await ctx.prisma.pull.findUnique(input);
      return findUniquePull;
    },
  })

  .query("findUniquePullOrThrow", {
    input: PullFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniquePullOrThrow = await ctx.prisma.pull.findUniqueOrThrow(input);
      return findUniquePullOrThrow;
    },
  })

  .query("groupByPull", {
    input: PullGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByPull = await ctx.prisma.pull.groupBy(input);
      return groupByPull;
    },
  })

  .mutation("updateManyPull", {
    input: PullUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyPull = await ctx.prisma.pull.updateMany(input);
      return updateManyPull;
    },
  })

  .mutation("updateOnePull", {
    input: PullUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOnePull = await ctx.prisma.pull.update(input);
      return updateOnePull;
    },
  })

  .mutation("upsertOnePull", {
    input: PullUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOnePull = await ctx.prisma.pull.upsert(input);
      return upsertOnePull;
    },
  })
