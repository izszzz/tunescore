import { t, publicProcedure } from "./helpers/createRouter";
import { CartFindUniqueSchema } from "../schemas/findUniqueCart.schema";
import { CartFindFirstSchema } from "../schemas/findFirstCart.schema";
import { CartFindManySchema } from "../schemas/findManyCart.schema";
import { CartCreateOneSchema } from "../schemas/createOneCart.schema";
import { CartCreateManySchema } from "../schemas/createManyCart.schema";
import { CartDeleteOneSchema } from "../schemas/deleteOneCart.schema";
import { CartUpdateOneSchema } from "../schemas/updateOneCart.schema";
import { CartDeleteManySchema } from "../schemas/deleteManyCart.schema";
import { CartUpdateManySchema } from "../schemas/updateManyCart.schema";
import { CartUpsertSchema } from "../schemas/upsertOneCart.schema";
import { CartAggregateSchema } from "../schemas/aggregateCart.schema";
import { CartGroupBySchema } from "../schemas/groupByCart.schema";
import { CartFindRawObjectSchema } from "../schemas/objects/CartFindRaw.schema";
import { CartAggregateRawObjectSchema } from "../schemas/objects/CartAggregateRaw.schema";

export const cartsRouter = t.router({
  aggregateCart: publicProcedure
    .input(CartAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateCart = await ctx.prisma.cart.aggregate(input);
      return aggregateCart;
    }),
  aggregateCartRaw: publicProcedure
    .input(CartAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateCartRaw = await ctx.prisma.cart.aggregateRaw(input);
      return aggregateCartRaw;
    }),
  createManyCart: publicProcedure
    .input(CartCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyCart = await ctx.prisma.cart.createMany(input);
      return createManyCart;
    }),
  createOneCart: publicProcedure
    .input(CartCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneCart = await ctx.prisma.cart.create(input);
      return createOneCart;
    }),
  deleteManyCart: publicProcedure
    .input(CartDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyCart = await ctx.prisma.cart.deleteMany(input);
      return deleteManyCart;
    }),
  deleteOneCart: publicProcedure
    .input(CartDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneCart = await ctx.prisma.cart.delete(input);
      return deleteOneCart;
    }),
  findFirstCart: publicProcedure
    .input(CartFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstCart = await ctx.prisma.cart.findFirst(input);
      return findFirstCart;
    }),
  findFirstCartOrThrow: publicProcedure
    .input(CartFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstCartOrThrow = await ctx.prisma.cart.findFirstOrThrow(input);
      return findFirstCartOrThrow;
    }),
  findManyCart: publicProcedure
    .input(CartFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyCart = await ctx.prisma.cart.findMany(input);
      return findManyCart;
    }),
  findCartRaw: publicProcedure
    .input(CartFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findCartRaw = await ctx.prisma.cart.findRaw(input);
      return findCartRaw;
    }),
  findUniqueCart: publicProcedure
    .input(CartFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueCart = await ctx.prisma.cart.findUnique(input);
      return findUniqueCart;
    }),
  findUniqueCartOrThrow: publicProcedure
    .input(CartFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueCartOrThrow = await ctx.prisma.cart.findUniqueOrThrow(input);
      return findUniqueCartOrThrow;
    }),
  groupByCart: publicProcedure
    .input(CartGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByCart = await ctx.prisma.cart.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByCart;
    }),
  updateManyCart: publicProcedure
    .input(CartUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyCart = await ctx.prisma.cart.updateMany(input);
      return updateManyCart;
    }),
  updateOneCart: publicProcedure
    .input(CartUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneCart = await ctx.prisma.cart.update(input);
      return updateOneCart;
    }),
  upsertOneCart: publicProcedure
    .input(CartUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneCart = await ctx.prisma.cart.upsert(input);
      return upsertOneCart;
    }),

})
