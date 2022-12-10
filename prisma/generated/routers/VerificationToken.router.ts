import { createRouter } from "./helpers/createRouter";
import { VerificationTokenFindUniqueSchema } from "../schemas/findUniqueVerificationToken.schema";
import { VerificationTokenFindFirstSchema } from "../schemas/findFirstVerificationToken.schema";
import { VerificationTokenFindManySchema } from "../schemas/findManyVerificationToken.schema";
import { VerificationTokenCreateOneSchema } from "../schemas/createOneVerificationToken.schema";
import { VerificationTokenCreateManySchema } from "../schemas/createManyVerificationToken.schema";
import { VerificationTokenDeleteOneSchema } from "../schemas/deleteOneVerificationToken.schema";
import { VerificationTokenUpdateOneSchema } from "../schemas/updateOneVerificationToken.schema";
import { VerificationTokenDeleteManySchema } from "../schemas/deleteManyVerificationToken.schema";
import { VerificationTokenUpdateManySchema } from "../schemas/updateManyVerificationToken.schema";
import { VerificationTokenUpsertSchema } from "../schemas/upsertOneVerificationToken.schema";
import { VerificationTokenAggregateSchema } from "../schemas/aggregateVerificationToken.schema";
import { VerificationTokenGroupBySchema } from "../schemas/groupByVerificationToken.schema";
import { VerificationTokenFindRawObjectSchema } from "../schemas/objects/VerificationTokenFindRaw.schema";
import { VerificationTokenAggregateRawObjectSchema } from "../schemas/objects/VerificationTokenAggregateRaw.schema";

export const verificationtokensRouter = createRouter()

  .query("aggregateVerificationToken", {
    input: VerificationTokenAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateVerificationToken = await ctx.prisma.verificationToken.aggregate(input);
      return aggregateVerificationToken;
    },
  })

  .query("aggregateVerificationTokenRaw", {
    input: VerificationTokenAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateVerificationTokenRaw = await ctx.prisma.verificationToken.aggregateRaw(input);
      return aggregateVerificationTokenRaw;
    },
  })

  .mutation("createManyVerificationToken", {
    input: VerificationTokenCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyVerificationToken = await ctx.prisma.verificationToken.createMany(input);
      return createManyVerificationToken;
    },
  })

  .mutation("createOneVerificationToken", {
    input: VerificationTokenCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneVerificationToken = await ctx.prisma.verificationToken.create(input);
      return createOneVerificationToken;
    },
  })

  .mutation("deleteManyVerificationToken", {
    input: VerificationTokenDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyVerificationToken = await ctx.prisma.verificationToken.deleteMany(input);
      return deleteManyVerificationToken;
    },
  })

  .mutation("deleteOneVerificationToken", {
    input: VerificationTokenDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneVerificationToken = await ctx.prisma.verificationToken.delete(input);
      return deleteOneVerificationToken;
    },
  })

  .query("findFirstVerificationToken", {
    input: VerificationTokenFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstVerificationToken = await ctx.prisma.verificationToken.findFirst(input);
      return findFirstVerificationToken;
    },
  })

  .query("findFirstVerificationTokenOrThrow", {
    input: VerificationTokenFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstVerificationTokenOrThrow = await ctx.prisma.verificationToken.findFirstOrThrow(input);
      return findFirstVerificationTokenOrThrow;
    },
  })

  .query("findManyVerificationToken", {
    input: VerificationTokenFindManySchema,
    async resolve({ ctx, input }) {
      const findManyVerificationToken = await ctx.prisma.verificationToken.findMany(input);
      return findManyVerificationToken;
    },
  })

  .query("findVerificationTokenRaw", {
    input: VerificationTokenFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findVerificationTokenRaw = await ctx.prisma.verificationToken.findRaw(input);
      return findVerificationTokenRaw;
    },
  })

  .query("findUniqueVerificationToken", {
    input: VerificationTokenFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueVerificationToken = await ctx.prisma.verificationToken.findUnique(input);
      return findUniqueVerificationToken;
    },
  })

  .query("findUniqueVerificationTokenOrThrow", {
    input: VerificationTokenFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueVerificationTokenOrThrow = await ctx.prisma.verificationToken.findUniqueOrThrow(input);
      return findUniqueVerificationTokenOrThrow;
    },
  })

  .query("groupByVerificationToken", {
    input: VerificationTokenGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByVerificationToken = await ctx.prisma.verificationToken.groupBy(input);
      return groupByVerificationToken;
    },
  })

  .mutation("updateManyVerificationToken", {
    input: VerificationTokenUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyVerificationToken = await ctx.prisma.verificationToken.updateMany(input);
      return updateManyVerificationToken;
    },
  })

  .mutation("updateOneVerificationToken", {
    input: VerificationTokenUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneVerificationToken = await ctx.prisma.verificationToken.update(input);
      return updateOneVerificationToken;
    },
  })

  .mutation("upsertOneVerificationToken", {
    input: VerificationTokenUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneVerificationToken = await ctx.prisma.verificationToken.upsert(input);
      return upsertOneVerificationToken;
    },
  })
