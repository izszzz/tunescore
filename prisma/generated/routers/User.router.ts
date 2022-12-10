import { createRouter } from "./helpers/createRouter";
import { UserFindUniqueSchema } from "../schemas/findUniqueUser.schema";
import { UserFindFirstSchema } from "../schemas/findFirstUser.schema";
import { UserFindManySchema } from "../schemas/findManyUser.schema";
import { UserCreateOneSchema } from "../schemas/createOneUser.schema";
import { UserCreateManySchema } from "../schemas/createManyUser.schema";
import { UserDeleteOneSchema } from "../schemas/deleteOneUser.schema";
import { UserUpdateOneSchema } from "../schemas/updateOneUser.schema";
import { UserDeleteManySchema } from "../schemas/deleteManyUser.schema";
import { UserUpdateManySchema } from "../schemas/updateManyUser.schema";
import { UserUpsertSchema } from "../schemas/upsertOneUser.schema";
import { UserAggregateSchema } from "../schemas/aggregateUser.schema";
import { UserGroupBySchema } from "../schemas/groupByUser.schema";
import { UserFindRawObjectSchema } from "../schemas/objects/UserFindRaw.schema";
import { UserAggregateRawObjectSchema } from "../schemas/objects/UserAggregateRaw.schema";

export const usersRouter = createRouter()

  .query("aggregateUser", {
    input: UserAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateUser = await ctx.prisma.user.aggregate(input);
      return aggregateUser;
    },
  })

  .query("aggregateUserRaw", {
    input: UserAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateUserRaw = await ctx.prisma.user.aggregateRaw(input);
      return aggregateUserRaw;
    },
  })

  .mutation("createManyUser", {
    input: UserCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyUser = await ctx.prisma.user.createMany(input);
      return createManyUser;
    },
  })

  .mutation("createOneUser", {
    input: UserCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneUser = await ctx.prisma.user.create(input);
      return createOneUser;
    },
  })

  .mutation("deleteManyUser", {
    input: UserDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyUser = await ctx.prisma.user.deleteMany(input);
      return deleteManyUser;
    },
  })

  .mutation("deleteOneUser", {
    input: UserDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneUser = await ctx.prisma.user.delete(input);
      return deleteOneUser;
    },
  })

  .query("findFirstUser", {
    input: UserFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstUser = await ctx.prisma.user.findFirst(input);
      return findFirstUser;
    },
  })

  .query("findFirstUserOrThrow", {
    input: UserFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstUserOrThrow = await ctx.prisma.user.findFirstOrThrow(input);
      return findFirstUserOrThrow;
    },
  })

  .query("findManyUser", {
    input: UserFindManySchema,
    async resolve({ ctx, input }) {
      const findManyUser = await ctx.prisma.user.findMany(input);
      return findManyUser;
    },
  })

  .query("findUserRaw", {
    input: UserFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findUserRaw = await ctx.prisma.user.findRaw(input);
      return findUserRaw;
    },
  })

  .query("findUniqueUser", {
    input: UserFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueUser = await ctx.prisma.user.findUnique(input);
      return findUniqueUser;
    },
  })

  .query("findUniqueUserOrThrow", {
    input: UserFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueUserOrThrow = await ctx.prisma.user.findUniqueOrThrow(input);
      return findUniqueUserOrThrow;
    },
  })

  .query("groupByUser", {
    input: UserGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByUser = await ctx.prisma.user.groupBy(input);
      return groupByUser;
    },
  })

  .mutation("updateManyUser", {
    input: UserUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyUser = await ctx.prisma.user.updateMany(input);
      return updateManyUser;
    },
  })

  .mutation("updateOneUser", {
    input: UserUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneUser = await ctx.prisma.user.update(input);
      return updateOneUser;
    },
  })

  .mutation("upsertOneUser", {
    input: UserUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneUser = await ctx.prisma.user.upsert(input);
      return upsertOneUser;
    },
  })
