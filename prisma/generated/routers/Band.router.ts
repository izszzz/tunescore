import { createRouter } from "./helpers/createRouter";
import { BandFindUniqueSchema } from "../schemas/findUniqueBand.schema";
import { BandFindFirstSchema } from "../schemas/findFirstBand.schema";
import { BandFindManySchema } from "../schemas/findManyBand.schema";
import { BandCreateOneSchema } from "../schemas/createOneBand.schema";
import { BandCreateManySchema } from "../schemas/createManyBand.schema";
import { BandDeleteOneSchema } from "../schemas/deleteOneBand.schema";
import { BandUpdateOneSchema } from "../schemas/updateOneBand.schema";
import { BandDeleteManySchema } from "../schemas/deleteManyBand.schema";
import { BandUpdateManySchema } from "../schemas/updateManyBand.schema";
import { BandUpsertSchema } from "../schemas/upsertOneBand.schema";
import { BandAggregateSchema } from "../schemas/aggregateBand.schema";
import { BandGroupBySchema } from "../schemas/groupByBand.schema";
import { BandFindRawObjectSchema } from "../schemas/objects/BandFindRaw.schema";
import { BandAggregateRawObjectSchema } from "../schemas/objects/BandAggregateRaw.schema";

export const bandsRouter = createRouter()

  .query("aggregateBand", {
    input: BandAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateBand = await ctx.prisma.band.aggregate(input);
      return aggregateBand;
    },
  })

  .query("aggregateBandRaw", {
    input: BandAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateBandRaw = await ctx.prisma.band.aggregateRaw(input);
      return aggregateBandRaw;
    },
  })

  .mutation("createManyBand", {
    input: BandCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyBand = await ctx.prisma.band.createMany(input);
      return createManyBand;
    },
  })

  .mutation("createOneBand", {
    input: BandCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneBand = await ctx.prisma.band.create(input);
      return createOneBand;
    },
  })

  .mutation("deleteManyBand", {
    input: BandDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyBand = await ctx.prisma.band.deleteMany(input);
      return deleteManyBand;
    },
  })

  .mutation("deleteOneBand", {
    input: BandDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneBand = await ctx.prisma.band.delete(input);
      return deleteOneBand;
    },
  })

  .query("findFirstBand", {
    input: BandFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstBand = await ctx.prisma.band.findFirst(input);
      return findFirstBand;
    },
  })

  .query("findFirstBandOrThrow", {
    input: BandFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstBandOrThrow = await ctx.prisma.band.findFirstOrThrow(input);
      return findFirstBandOrThrow;
    },
  })

  .query("findManyBand", {
    input: BandFindManySchema,
    async resolve({ ctx, input }) {
      const findManyBand = await ctx.prisma.band.findMany(input);
      return findManyBand;
    },
  })

  .query("findBandRaw", {
    input: BandFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findBandRaw = await ctx.prisma.band.findRaw(input);
      return findBandRaw;
    },
  })

  .query("findUniqueBand", {
    input: BandFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueBand = await ctx.prisma.band.findUnique(input);
      return findUniqueBand;
    },
  })

  .query("findUniqueBandOrThrow", {
    input: BandFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueBandOrThrow = await ctx.prisma.band.findUniqueOrThrow(input);
      return findUniqueBandOrThrow;
    },
  })

  .query("groupByBand", {
    input: BandGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByBand = await ctx.prisma.band.groupBy(input);
      return groupByBand;
    },
  })

  .mutation("updateManyBand", {
    input: BandUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyBand = await ctx.prisma.band.updateMany(input);
      return updateManyBand;
    },
  })

  .mutation("updateOneBand", {
    input: BandUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneBand = await ctx.prisma.band.update(input);
      return updateOneBand;
    },
  })

  .mutation("upsertOneBand", {
    input: BandUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneBand = await ctx.prisma.band.upsert(input);
      return upsertOneBand;
    },
  })
