import { createRouter } from "./helpers/createRouter";
import { RoleFindUniqueSchema } from "../schemas/findUniqueRole.schema";
import { RoleFindFirstSchema } from "../schemas/findFirstRole.schema";
import { RoleFindManySchema } from "../schemas/findManyRole.schema";
import { RoleCreateOneSchema } from "../schemas/createOneRole.schema";
import { RoleCreateManySchema } from "../schemas/createManyRole.schema";
import { RoleDeleteOneSchema } from "../schemas/deleteOneRole.schema";
import { RoleUpdateOneSchema } from "../schemas/updateOneRole.schema";
import { RoleDeleteManySchema } from "../schemas/deleteManyRole.schema";
import { RoleUpdateManySchema } from "../schemas/updateManyRole.schema";
import { RoleUpsertSchema } from "../schemas/upsertOneRole.schema";
import { RoleAggregateSchema } from "../schemas/aggregateRole.schema";
import { RoleGroupBySchema } from "../schemas/groupByRole.schema";
import { RoleFindRawObjectSchema } from "../schemas/objects/RoleFindRaw.schema";
import { RoleAggregateRawObjectSchema } from "../schemas/objects/RoleAggregateRaw.schema";

export const rolesRouter = createRouter()

  .query("aggregateRole", {
    input: RoleAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateRole = await ctx.prisma.role.aggregate(input);
      return aggregateRole;
    },
  })

  .query("aggregateRoleRaw", {
    input: RoleAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateRoleRaw = await ctx.prisma.role.aggregateRaw(input);
      return aggregateRoleRaw;
    },
  })

  .mutation("createManyRole", {
    input: RoleCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyRole = await ctx.prisma.role.createMany(input);
      return createManyRole;
    },
  })

  .mutation("createOneRole", {
    input: RoleCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneRole = await ctx.prisma.role.create(input);
      return createOneRole;
    },
  })

  .mutation("deleteManyRole", {
    input: RoleDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyRole = await ctx.prisma.role.deleteMany(input);
      return deleteManyRole;
    },
  })

  .mutation("deleteOneRole", {
    input: RoleDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneRole = await ctx.prisma.role.delete(input);
      return deleteOneRole;
    },
  })

  .query("findFirstRole", {
    input: RoleFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstRole = await ctx.prisma.role.findFirst(input);
      return findFirstRole;
    },
  })

  .query("findFirstRoleOrThrow", {
    input: RoleFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstRoleOrThrow = await ctx.prisma.role.findFirstOrThrow(input);
      return findFirstRoleOrThrow;
    },
  })

  .query("findManyRole", {
    input: RoleFindManySchema,
    async resolve({ ctx, input }) {
      const findManyRole = await ctx.prisma.role.findMany(input);
      return findManyRole;
    },
  })

  .query("findRoleRaw", {
    input: RoleFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findRoleRaw = await ctx.prisma.role.findRaw(input);
      return findRoleRaw;
    },
  })

  .query("findUniqueRole", {
    input: RoleFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueRole = await ctx.prisma.role.findUnique(input);
      return findUniqueRole;
    },
  })

  .query("findUniqueRoleOrThrow", {
    input: RoleFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueRoleOrThrow = await ctx.prisma.role.findUniqueOrThrow(input);
      return findUniqueRoleOrThrow;
    },
  })

  .query("groupByRole", {
    input: RoleGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByRole = await ctx.prisma.role.groupBy(input);
      return groupByRole;
    },
  })

  .mutation("updateManyRole", {
    input: RoleUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyRole = await ctx.prisma.role.updateMany(input);
      return updateManyRole;
    },
  })

  .mutation("updateOneRole", {
    input: RoleUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneRole = await ctx.prisma.role.update(input);
      return updateOneRole;
    },
  })

  .mutation("upsertOneRole", {
    input: RoleUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneRole = await ctx.prisma.role.upsert(input);
      return upsertOneRole;
    },
  })
