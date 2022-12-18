import { createRouter } from "./helpers/createRouter";
import { VoteFindUniqueSchema } from "../schemas/findUniqueVote.schema";
import { VoteFindFirstSchema } from "../schemas/findFirstVote.schema";
import { VoteFindManySchema } from "../schemas/findManyVote.schema";
import { VoteCreateOneSchema } from "../schemas/createOneVote.schema";
import { VoteCreateManySchema } from "../schemas/createManyVote.schema";
import { VoteDeleteOneSchema } from "../schemas/deleteOneVote.schema";
import { VoteUpdateOneSchema } from "../schemas/updateOneVote.schema";
import { VoteDeleteManySchema } from "../schemas/deleteManyVote.schema";
import { VoteUpdateManySchema } from "../schemas/updateManyVote.schema";
import { VoteUpsertSchema } from "../schemas/upsertOneVote.schema";
import { VoteAggregateSchema } from "../schemas/aggregateVote.schema";
import { VoteGroupBySchema } from "../schemas/groupByVote.schema";
import { VoteFindRawObjectSchema } from "../schemas/objects/VoteFindRaw.schema";
import { VoteAggregateRawObjectSchema } from "../schemas/objects/VoteAggregateRaw.schema";

export const votesRouter = createRouter()

  .query("aggregateVote", {
    input: VoteAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateVote = await ctx.prisma.vote.aggregate(input);
      return aggregateVote;
    },
  })

  .query("aggregateVoteRaw", {
    input: VoteAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateVoteRaw = await ctx.prisma.vote.aggregateRaw(input);
      return aggregateVoteRaw;
    },
  })

  .mutation("createManyVote", {
    input: VoteCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyVote = await ctx.prisma.vote.createMany(input);
      return createManyVote;
    },
  })

  .mutation("createOneVote", {
    input: VoteCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneVote = await ctx.prisma.vote.create(input);
      return createOneVote;
    },
  })

  .mutation("deleteManyVote", {
    input: VoteDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyVote = await ctx.prisma.vote.deleteMany(input);
      return deleteManyVote;
    },
  })

  .mutation("deleteOneVote", {
    input: VoteDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneVote = await ctx.prisma.vote.delete(input);
      return deleteOneVote;
    },
  })

  .query("findFirstVote", {
    input: VoteFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstVote = await ctx.prisma.vote.findFirst(input);
      return findFirstVote;
    },
  })

  .query("findFirstVoteOrThrow", {
    input: VoteFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstVoteOrThrow = await ctx.prisma.vote.findFirstOrThrow(input);
      return findFirstVoteOrThrow;
    },
  })

  .query("findManyVote", {
    input: VoteFindManySchema,
    async resolve({ ctx, input }) {
      const findManyVote = await ctx.prisma.vote.findMany(input);
      return findManyVote;
    },
  })

  .query("findVoteRaw", {
    input: VoteFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findVoteRaw = await ctx.prisma.vote.findRaw(input);
      return findVoteRaw;
    },
  })

  .query("findUniqueVote", {
    input: VoteFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueVote = await ctx.prisma.vote.findUnique(input);
      return findUniqueVote;
    },
  })

  .query("findUniqueVoteOrThrow", {
    input: VoteFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueVoteOrThrow = await ctx.prisma.vote.findUniqueOrThrow(input);
      return findUniqueVoteOrThrow;
    },
  })

  .query("groupByVote", {
    input: VoteGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByVote = await ctx.prisma.vote.groupBy(input);
      return groupByVote;
    },
  })

  .mutation("updateManyVote", {
    input: VoteUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyVote = await ctx.prisma.vote.updateMany(input);
      return updateManyVote;
    },
  })

  .mutation("updateOneVote", {
    input: VoteUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneVote = await ctx.prisma.vote.update(input);
      return updateOneVote;
    },
  })

  .mutation("upsertOneVote", {
    input: VoteUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneVote = await ctx.prisma.vote.upsert(input);
      return upsertOneVote;
    },
  })
