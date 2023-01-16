import { t, publicProcedure } from "./helpers/createRouter";
import { PurchaseFindUniqueSchema } from "../schemas/findUniquePurchase.schema";
import { PurchaseFindFirstSchema } from "../schemas/findFirstPurchase.schema";
import { PurchaseFindManySchema } from "../schemas/findManyPurchase.schema";
import { PurchaseCreateOneSchema } from "../schemas/createOnePurchase.schema";
import { PurchaseCreateManySchema } from "../schemas/createManyPurchase.schema";
import { PurchaseDeleteOneSchema } from "../schemas/deleteOnePurchase.schema";
import { PurchaseUpdateOneSchema } from "../schemas/updateOnePurchase.schema";
import { PurchaseDeleteManySchema } from "../schemas/deleteManyPurchase.schema";
import { PurchaseUpdateManySchema } from "../schemas/updateManyPurchase.schema";
import { PurchaseUpsertSchema } from "../schemas/upsertOnePurchase.schema";
import { PurchaseAggregateSchema } from "../schemas/aggregatePurchase.schema";
import { PurchaseGroupBySchema } from "../schemas/groupByPurchase.schema";
import { PurchaseFindRawObjectSchema } from "../schemas/objects/PurchaseFindRaw.schema";
import { PurchaseAggregateRawObjectSchema } from "../schemas/objects/PurchaseAggregateRaw.schema";

export const purchasesRouter = t.router({
  aggregatePurchase: publicProcedure
    .input(PurchaseAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregatePurchase = await ctx.prisma.purchase.aggregate(input);
      return aggregatePurchase;
    }),
  aggregatePurchaseRaw: publicProcedure
    .input(PurchaseAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregatePurchaseRaw = await ctx.prisma.purchase.aggregateRaw(input);
      return aggregatePurchaseRaw;
    }),
  createManyPurchase: publicProcedure
    .input(PurchaseCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyPurchase = await ctx.prisma.purchase.createMany(input);
      return createManyPurchase;
    }),
  createOnePurchase: publicProcedure
    .input(PurchaseCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOnePurchase = await ctx.prisma.purchase.create(input);
      return createOnePurchase;
    }),
  deleteManyPurchase: publicProcedure
    .input(PurchaseDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyPurchase = await ctx.prisma.purchase.deleteMany(input);
      return deleteManyPurchase;
    }),
  deleteOnePurchase: publicProcedure
    .input(PurchaseDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOnePurchase = await ctx.prisma.purchase.delete(input);
      return deleteOnePurchase;
    }),
  findFirstPurchase: publicProcedure
    .input(PurchaseFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstPurchase = await ctx.prisma.purchase.findFirst(input);
      return findFirstPurchase;
    }),
  findFirstPurchaseOrThrow: publicProcedure
    .input(PurchaseFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstPurchaseOrThrow = await ctx.prisma.purchase.findFirstOrThrow(input);
      return findFirstPurchaseOrThrow;
    }),
  findManyPurchase: publicProcedure
    .input(PurchaseFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyPurchase = await ctx.prisma.purchase.findMany(input);
      return findManyPurchase;
    }),
  findPurchaseRaw: publicProcedure
    .input(PurchaseFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findPurchaseRaw = await ctx.prisma.purchase.findRaw(input);
      return findPurchaseRaw;
    }),
  findUniquePurchase: publicProcedure
    .input(PurchaseFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniquePurchase = await ctx.prisma.purchase.findUnique(input);
      return findUniquePurchase;
    }),
  findUniquePurchaseOrThrow: publicProcedure
    .input(PurchaseFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniquePurchaseOrThrow = await ctx.prisma.purchase.findUniqueOrThrow(input);
      return findUniquePurchaseOrThrow;
    }),
  groupByPurchase: publicProcedure
    .input(PurchaseGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByPurchase = await ctx.prisma.purchase.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPurchase;
    }),
  updateManyPurchase: publicProcedure
    .input(PurchaseUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyPurchase = await ctx.prisma.purchase.updateMany(input);
      return updateManyPurchase;
    }),
  updateOnePurchase: publicProcedure
    .input(PurchaseUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOnePurchase = await ctx.prisma.purchase.update(input);
      return updateOnePurchase;
    }),
  upsertOnePurchase: publicProcedure
    .input(PurchaseUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOnePurchase = await ctx.prisma.purchase.upsert(input);
      return upsertOnePurchase;
    }),

})
