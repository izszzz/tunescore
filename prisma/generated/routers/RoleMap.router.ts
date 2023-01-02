import { createRouter } from "./helpers/createRouter";
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

export const rolemapsRouter = createRouter()

  .query("aggregateRoleMap", {
    input: RoleMapAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateRoleMap = await ctx.prisma.roleMap.aggregate(input);
      return aggregateRoleMap;
    },
  })

  .query("aggregateRoleMapRaw", {
    input: RoleMapAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateRoleMapRaw = await ctx.prisma.roleMap.aggregateRaw(input);
      return aggregateRoleMapRaw;
    },
  })

  .mutation("createManyRoleMap", {
    input: RoleMapCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyRoleMap = await ctx.prisma.roleMap.createMany(input);
      return createManyRoleMap;
    },
  })

  .mutation("createOneRoleMap", {
    input: RoleMapCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneRoleMap = await ctx.prisma.roleMap.create(input);
      return createOneRoleMap;
    },
  })

  .mutation("deleteManyRoleMap", {
    input: RoleMapDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyRoleMap = await ctx.prisma.roleMap.deleteMany(input);
      return deleteManyRoleMap;
    },
  })

  .mutation("deleteOneRoleMap", {
    input: RoleMapDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneRoleMap = await ctx.prisma.roleMap.delete(input);
      return deleteOneRoleMap;
    },
  })

  .query("findFirstRoleMap", {
    input: RoleMapFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstRoleMap = await ctx.prisma.roleMap.findFirst(input);
      return findFirstRoleMap;
    },
  })

  .query("findFirstRoleMapOrThrow", {
    input: RoleMapFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstRoleMapOrThrow = await ctx.prisma.roleMap.findFirstOrThrow(input);
      return findFirstRoleMapOrThrow;
    },
  })

  .query("findManyRoleMap", {
    input: RoleMapFindManySchema,
    async resolve({ ctx, input }) {
      const findManyRoleMap = await ctx.prisma.roleMap.findMany(input);
      return findManyRoleMap;
    },
  })

  .query("findRoleMapRaw", {
    input: RoleMapFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findRoleMapRaw = await ctx.prisma.roleMap.findRaw(input);
      return findRoleMapRaw;
    },
  })

  .query("findUniqueRoleMap", {
    input: RoleMapFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueRoleMap = await ctx.prisma.roleMap.findUnique(input);
      return findUniqueRoleMap;
    },
  })

  .query("findUniqueRoleMapOrThrow", {
    input: RoleMapFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueRoleMapOrThrow = await ctx.prisma.roleMap.findUniqueOrThrow(input);
      return findUniqueRoleMapOrThrow;
    },
  })

  .query("groupByRoleMap", {
    input: RoleMapGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByRoleMap = await ctx.prisma.roleMap.groupBy(input);
      return groupByRoleMap;
    },
  })

  .mutation("updateManyRoleMap", {
    input: RoleMapUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyRoleMap = await ctx.prisma.roleMap.updateMany(input);
      return updateManyRoleMap;
    },
  })

  .mutation("updateOneRoleMap", {
    input: RoleMapUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneRoleMap = await ctx.prisma.roleMap.update(input);
      return updateOneRoleMap;
    },
  })

  .mutation("upsertOneRoleMap", {
    input: RoleMapUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneRoleMap = await ctx.prisma.roleMap.upsert(input);
      return upsertOneRoleMap;
    },
  })
