import { t, publicProcedure } from "./helpers/createRouter";
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

export const votesRouter = t.router({
  aggregateVote: publicProcedure
    .input(VoteAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateVote = await ctx.prisma.vote.aggregate(input);
      return aggregateVote;
    }),
  aggregateVoteRaw: publicProcedure
    .input(VoteAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateVoteRaw = await ctx.prisma.vote.aggregateRaw(input);
      return aggregateVoteRaw;
    }),
  createManyVote: publicProcedure
    .input(VoteCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyVote = await ctx.prisma.vote.createMany(input);
      return createManyVote;
    }),
  createOneVote: publicProcedure
    .input(VoteCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneVote = await ctx.prisma.vote.create(input);
      return createOneVote;
    }),
  deleteManyVote: publicProcedure
    .input(VoteDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyVote = await ctx.prisma.vote.deleteMany(input);
      return deleteManyVote;
    }),
  deleteOneVote: publicProcedure
    .input(VoteDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneVote = await ctx.prisma.vote.delete(input);
      return deleteOneVote;
    }),
  findFirstVote: publicProcedure
    .input(VoteFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstVote = await ctx.prisma.vote.findFirst(input);
      return findFirstVote;
    }),
  findFirstVoteOrThrow: publicProcedure
    .input(VoteFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstVoteOrThrow = await ctx.prisma.vote.findFirstOrThrow(input);
      return findFirstVoteOrThrow;
    }),
  findManyVote: publicProcedure
    .input(VoteFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyVote = await ctx.prisma.vote.findMany(input);
      return findManyVote;
    }),
  findVoteRaw: publicProcedure
    .input(VoteFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findVoteRaw = await ctx.prisma.vote.findRaw(input);
      return findVoteRaw;
    }),
  findUniqueVote: publicProcedure
    .input(VoteFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueVote = await ctx.prisma.vote.findUnique(input);
      return findUniqueVote;
    }),
  findUniqueVoteOrThrow: publicProcedure
    .input(VoteFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueVoteOrThrow = await ctx.prisma.vote.findUniqueOrThrow(input);
      return findUniqueVoteOrThrow;
    }),
  groupByVote: publicProcedure
    .input(VoteGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByVote = await ctx.prisma.vote.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByVote;
    }),
  updateManyVote: publicProcedure
    .input(VoteUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyVote = await ctx.prisma.vote.updateMany(input);
      return updateManyVote;
    }),
  updateOneVote: publicProcedure
    .input(VoteUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneVote = await ctx.prisma.vote.update(input);
      return updateOneVote;
    }),
  upsertOneVote: publicProcedure
    .input(VoteUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneVote = await ctx.prisma.vote.upsert(input);
      return upsertOneVote;
    }),

})
