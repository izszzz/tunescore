import { t, publicProcedure } from "./helpers/createRouter";
import { ParticipationFindUniqueSchema } from "../schemas/findUniqueParticipation.schema";
import { ParticipationFindFirstSchema } from "../schemas/findFirstParticipation.schema";
import { ParticipationFindManySchema } from "../schemas/findManyParticipation.schema";
import { ParticipationCreateOneSchema } from "../schemas/createOneParticipation.schema";
import { ParticipationCreateManySchema } from "../schemas/createManyParticipation.schema";
import { ParticipationDeleteOneSchema } from "../schemas/deleteOneParticipation.schema";
import { ParticipationUpdateOneSchema } from "../schemas/updateOneParticipation.schema";
import { ParticipationDeleteManySchema } from "../schemas/deleteManyParticipation.schema";
import { ParticipationUpdateManySchema } from "../schemas/updateManyParticipation.schema";
import { ParticipationUpsertSchema } from "../schemas/upsertOneParticipation.schema";
import { ParticipationAggregateSchema } from "../schemas/aggregateParticipation.schema";
import { ParticipationGroupBySchema } from "../schemas/groupByParticipation.schema";
import { ParticipationFindRawObjectSchema } from "../schemas/objects/ParticipationFindRaw.schema";
import { ParticipationAggregateRawObjectSchema } from "../schemas/objects/ParticipationAggregateRaw.schema";

export const participationsRouter = t.router({
  aggregateParticipation: publicProcedure
    .input(ParticipationAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateParticipation = await ctx.prisma.participation.aggregate(input);
      return aggregateParticipation;
    }),
  aggregateParticipationRaw: publicProcedure
    .input(ParticipationAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateParticipationRaw = await ctx.prisma.participation.aggregateRaw(input);
      return aggregateParticipationRaw;
    }),
  createManyParticipation: publicProcedure
    .input(ParticipationCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyParticipation = await ctx.prisma.participation.createMany(input);
      return createManyParticipation;
    }),
  createOneParticipation: publicProcedure
    .input(ParticipationCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneParticipation = await ctx.prisma.participation.create(input);
      return createOneParticipation;
    }),
  deleteManyParticipation: publicProcedure
    .input(ParticipationDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyParticipation = await ctx.prisma.participation.deleteMany(input);
      return deleteManyParticipation;
    }),
  deleteOneParticipation: publicProcedure
    .input(ParticipationDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneParticipation = await ctx.prisma.participation.delete(input);
      return deleteOneParticipation;
    }),
  findFirstParticipation: publicProcedure
    .input(ParticipationFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstParticipation = await ctx.prisma.participation.findFirst(input);
      return findFirstParticipation;
    }),
  findFirstParticipationOrThrow: publicProcedure
    .input(ParticipationFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstParticipationOrThrow = await ctx.prisma.participation.findFirstOrThrow(input);
      return findFirstParticipationOrThrow;
    }),
  findManyParticipation: publicProcedure
    .input(ParticipationFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyParticipation = await ctx.prisma.participation.findMany(input);
      return findManyParticipation;
    }),
  findParticipationRaw: publicProcedure
    .input(ParticipationFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findParticipationRaw = await ctx.prisma.participation.findRaw(input);
      return findParticipationRaw;
    }),
  findUniqueParticipation: publicProcedure
    .input(ParticipationFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueParticipation = await ctx.prisma.participation.findUnique(input);
      return findUniqueParticipation;
    }),
  findUniqueParticipationOrThrow: publicProcedure
    .input(ParticipationFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueParticipationOrThrow = await ctx.prisma.participation.findUniqueOrThrow(input);
      return findUniqueParticipationOrThrow;
    }),
  groupByParticipation: publicProcedure
    .input(ParticipationGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByParticipation = await ctx.prisma.participation.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByParticipation;
    }),
  updateManyParticipation: publicProcedure
    .input(ParticipationUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyParticipation = await ctx.prisma.participation.updateMany(input);
      return updateManyParticipation;
    }),
  updateOneParticipation: publicProcedure
    .input(ParticipationUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneParticipation = await ctx.prisma.participation.update(input);
      return updateOneParticipation;
    }),
  upsertOneParticipation: publicProcedure
    .input(ParticipationUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneParticipation = await ctx.prisma.participation.upsert(input);
      return upsertOneParticipation;
    }),

})
