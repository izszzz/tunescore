import { t, publicProcedure } from "./helpers/createRouter";
import { RoleMapFindUniqueSchema } from "../schemas/findUniqueRoleMap.schema";
import { RoleMapFindFirstSchema } from "../schemas/findFirstRoleMap.schema";
import { RoleMapFindManySchema } from "../schemas/findManyRoleMap.schema";
import { RoleMapCreateOneSchema } from "../schemas/createOneRoleMap.schema";
import { RoleMapCreateManySchema } from "../schemas/createManyRoleMap.schema";
import { RoleMapDeleteOneSchema } from "../schemas/deleteOneRoleMap.schema";
import { RoleMapUpdateOneSchema } from "../schemas/updateOneRoleMap.schema";
import { RoleMapDeleteManySchema } from "../schemas/deleteManyRoleMap.schema";
import { RoleMapUpdateManySchema } from "../schemas/updateManyRoleMap.schema";
import { RoleMapUpsertSchema } from "../schemas/upsertOneRoleMap.schema";
import { RoleMapAggregateSchema } from "../schemas/aggregateRoleMap.schema";
import { RoleMapGroupBySchema } from "../schemas/groupByRoleMap.schema";
import { RoleMapFindRawObjectSchema } from "../schemas/objects/RoleMapFindRaw.schema";
import { RoleMapAggregateRawObjectSchema } from "../schemas/objects/RoleMapAggregateRaw.schema";

export const rolemapsRouter = t.router({
  aggregateRoleMap: publicProcedure
    .input(RoleMapAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateRoleMap = await ctx.prisma.roleMap.aggregate(input);
      return aggregateRoleMap;
    }),
  aggregateRoleMapRaw: publicProcedure
    .input(RoleMapAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateRoleMapRaw = await ctx.prisma.roleMap.aggregateRaw(input);
      return aggregateRoleMapRaw;
    }),
  createManyRoleMap: publicProcedure
    .input(RoleMapCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyRoleMap = await ctx.prisma.roleMap.createMany(input);
      return createManyRoleMap;
    }),
  createOneRoleMap: publicProcedure
    .input(RoleMapCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneRoleMap = await ctx.prisma.roleMap.create(input);
      return createOneRoleMap;
    }),
  deleteManyRoleMap: publicProcedure
    .input(RoleMapDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyRoleMap = await ctx.prisma.roleMap.deleteMany(input);
      return deleteManyRoleMap;
    }),
  deleteOneRoleMap: publicProcedure
    .input(RoleMapDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneRoleMap = await ctx.prisma.roleMap.delete(input);
      return deleteOneRoleMap;
    }),
  findFirstRoleMap: publicProcedure
    .input(RoleMapFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstRoleMap = await ctx.prisma.roleMap.findFirst(input);
      return findFirstRoleMap;
    }),
  findFirstRoleMapOrThrow: publicProcedure
    .input(RoleMapFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstRoleMapOrThrow = await ctx.prisma.roleMap.findFirstOrThrow(input);
      return findFirstRoleMapOrThrow;
    }),
  findManyRoleMap: publicProcedure
    .input(RoleMapFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyRoleMap = await ctx.prisma.roleMap.findMany(input);
      return findManyRoleMap;
    }),
  findRoleMapRaw: publicProcedure
    .input(RoleMapFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findRoleMapRaw = await ctx.prisma.roleMap.findRaw(input);
      return findRoleMapRaw;
    }),
  findUniqueRoleMap: publicProcedure
    .input(RoleMapFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueRoleMap = await ctx.prisma.roleMap.findUnique(input);
      return findUniqueRoleMap;
    }),
  findUniqueRoleMapOrThrow: publicProcedure
    .input(RoleMapFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueRoleMapOrThrow = await ctx.prisma.roleMap.findUniqueOrThrow(input);
      return findUniqueRoleMapOrThrow;
    }),
  groupByRoleMap: publicProcedure
    .input(RoleMapGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByRoleMap = await ctx.prisma.roleMap.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByRoleMap;
    }),
  updateManyRoleMap: publicProcedure
    .input(RoleMapUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyRoleMap = await ctx.prisma.roleMap.updateMany(input);
      return updateManyRoleMap;
    }),
  updateOneRoleMap: publicProcedure
    .input(RoleMapUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneRoleMap = await ctx.prisma.roleMap.update(input);
      return updateOneRoleMap;
    }),
  upsertOneRoleMap: publicProcedure
    .input(RoleMapUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneRoleMap = await ctx.prisma.roleMap.upsert(input);
      return upsertOneRoleMap;
    }),

})
