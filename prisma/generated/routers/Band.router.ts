import { t, shieldedProcedure } from "./helpers/createRouter";
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

export const bandsRouter = t.router({
  aggregateBand: shieldedProcedure
    .input(BandAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateBand = await ctx.prisma.band.aggregate(input);
      return aggregateBand;
    }),
  aggregateBandRaw: shieldedProcedure
    .input(BandAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateBandRaw = await ctx.prisma.band.aggregateRaw(input);
      return aggregateBandRaw;
    }),
  createManyBand: shieldedProcedure
    .input(BandCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyBand = await ctx.prisma.band.createMany(input);
      return createManyBand;
    }),
  createOneBand: shieldedProcedure
    .input(BandCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneBand = await ctx.prisma.band.create(input);
      return createOneBand;
    }),
  deleteManyBand: shieldedProcedure
    .input(BandDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyBand = await ctx.prisma.band.deleteMany(input);
      return deleteManyBand;
    }),
  deleteOneBand: shieldedProcedure
    .input(BandDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneBand = await ctx.prisma.band.delete(input);
      return deleteOneBand;
    }),
  findFirstBand: shieldedProcedure
    .input(BandFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstBand = await ctx.prisma.band.findFirst(input);
      return findFirstBand;
    }),
  findFirstBandOrThrow: shieldedProcedure
    .input(BandFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstBandOrThrow = await ctx.prisma.band.findFirstOrThrow(input);
      return findFirstBandOrThrow;
    }),
  findManyBand: shieldedProcedure
    .input(BandFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyBand = await ctx.prisma.band.findMany(input);
      return findManyBand;
    }),
  findBandRaw: shieldedProcedure
    .input(BandFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findBandRaw = await ctx.prisma.band.findRaw(input);
      return findBandRaw;
    }),
  findUniqueBand: shieldedProcedure
    .input(BandFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueBand = await ctx.prisma.band.findUnique(input);
      return findUniqueBand;
    }),
  findUniqueBandOrThrow: shieldedProcedure
    .input(BandFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueBandOrThrow = await ctx.prisma.band.findUniqueOrThrow(input);
      return findUniqueBandOrThrow;
    }),
  groupByBand: shieldedProcedure
    .input(BandGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByBand = await ctx.prisma.band.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByBand;
    }),
  updateManyBand: shieldedProcedure
    .input(BandUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyBand = await ctx.prisma.band.updateMany(input);
      return updateManyBand;
    }),
  updateOneBand: shieldedProcedure
    .input(BandUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneBand = await ctx.prisma.band.update(input);
      return updateOneBand;
    }),
  upsertOneBand: shieldedProcedure
    .input(BandUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneBand = await ctx.prisma.band.upsert(input);
      return upsertOneBand;
    }),

})
