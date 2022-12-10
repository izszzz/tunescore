import { createRouter } from "./helpers/createRouter";
import { AccountFindUniqueSchema } from "../schemas/findUniqueAccount.schema";
import { AccountFindFirstSchema } from "../schemas/findFirstAccount.schema";
import { AccountFindManySchema } from "../schemas/findManyAccount.schema";
import { AccountCreateOneSchema } from "../schemas/createOneAccount.schema";
import { AccountCreateManySchema } from "../schemas/createManyAccount.schema";
import { AccountDeleteOneSchema } from "../schemas/deleteOneAccount.schema";
import { AccountUpdateOneSchema } from "../schemas/updateOneAccount.schema";
import { AccountDeleteManySchema } from "../schemas/deleteManyAccount.schema";
import { AccountUpdateManySchema } from "../schemas/updateManyAccount.schema";
import { AccountUpsertSchema } from "../schemas/upsertOneAccount.schema";
import { AccountAggregateSchema } from "../schemas/aggregateAccount.schema";
import { AccountGroupBySchema } from "../schemas/groupByAccount.schema";
import { AccountFindRawObjectSchema } from "../schemas/objects/AccountFindRaw.schema";
import { AccountAggregateRawObjectSchema } from "../schemas/objects/AccountAggregateRaw.schema";

export const accountsRouter = createRouter()

  .query("aggregateAccount", {
    input: AccountAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateAccount = await ctx.prisma.account.aggregate(input);
      return aggregateAccount;
    },
  })

  .query("aggregateAccountRaw", {
    input: AccountAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateAccountRaw = await ctx.prisma.account.aggregateRaw(input);
      return aggregateAccountRaw;
    },
  })

  .mutation("createManyAccount", {
    input: AccountCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyAccount = await ctx.prisma.account.createMany(input);
      return createManyAccount;
    },
  })

  .mutation("createOneAccount", {
    input: AccountCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneAccount = await ctx.prisma.account.create(input);
      return createOneAccount;
    },
  })

  .mutation("deleteManyAccount", {
    input: AccountDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyAccount = await ctx.prisma.account.deleteMany(input);
      return deleteManyAccount;
    },
  })

  .mutation("deleteOneAccount", {
    input: AccountDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneAccount = await ctx.prisma.account.delete(input);
      return deleteOneAccount;
    },
  })

  .query("findFirstAccount", {
    input: AccountFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstAccount = await ctx.prisma.account.findFirst(input);
      return findFirstAccount;
    },
  })

  .query("findFirstAccountOrThrow", {
    input: AccountFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstAccountOrThrow = await ctx.prisma.account.findFirstOrThrow(input);
      return findFirstAccountOrThrow;
    },
  })

  .query("findManyAccount", {
    input: AccountFindManySchema,
    async resolve({ ctx, input }) {
      const findManyAccount = await ctx.prisma.account.findMany(input);
      return findManyAccount;
    },
  })

  .query("findAccountRaw", {
    input: AccountFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findAccountRaw = await ctx.prisma.account.findRaw(input);
      return findAccountRaw;
    },
  })

  .query("findUniqueAccount", {
    input: AccountFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueAccount = await ctx.prisma.account.findUnique(input);
      return findUniqueAccount;
    },
  })

  .query("findUniqueAccountOrThrow", {
    input: AccountFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueAccountOrThrow = await ctx.prisma.account.findUniqueOrThrow(input);
      return findUniqueAccountOrThrow;
    },
  })

  .query("groupByAccount", {
    input: AccountGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByAccount = await ctx.prisma.account.groupBy(input);
      return groupByAccount;
    },
  })

  .mutation("updateManyAccount", {
    input: AccountUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyAccount = await ctx.prisma.account.updateMany(input);
      return updateManyAccount;
    },
  })

  .mutation("updateOneAccount", {
    input: AccountUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneAccount = await ctx.prisma.account.update(input);
      return updateOneAccount;
    },
  })

  .mutation("upsertOneAccount", {
    input: AccountUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneAccount = await ctx.prisma.account.upsert(input);
      return upsertOneAccount;
    },
  })
