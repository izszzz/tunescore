import { t, publicProcedure } from "./helpers/createRouter";
import { ArtistFindUniqueSchema } from "../schemas/findUniqueArtist.schema";
import { ArtistFindFirstSchema } from "../schemas/findFirstArtist.schema";
import { ArtistFindManySchema } from "../schemas/findManyArtist.schema";
import { ArtistCreateOneSchema } from "../schemas/createOneArtist.schema";
import { ArtistCreateManySchema } from "../schemas/createManyArtist.schema";
import { ArtistDeleteOneSchema } from "../schemas/deleteOneArtist.schema";
import { ArtistUpdateOneSchema } from "../schemas/updateOneArtist.schema";
import { ArtistDeleteManySchema } from "../schemas/deleteManyArtist.schema";
import { ArtistUpdateManySchema } from "../schemas/updateManyArtist.schema";
import { ArtistUpsertSchema } from "../schemas/upsertOneArtist.schema";
import { ArtistAggregateSchema } from "../schemas/aggregateArtist.schema";
import { ArtistGroupBySchema } from "../schemas/groupByArtist.schema";
import { ArtistFindRawObjectSchema } from "../schemas/objects/ArtistFindRaw.schema";
import { ArtistAggregateRawObjectSchema } from "../schemas/objects/ArtistAggregateRaw.schema";

export const artistsRouter = t.router({
  aggregateArtist: publicProcedure
    .input(ArtistAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateArtist = await ctx.prisma.artist.aggregate(input);
      return aggregateArtist;
    }),
  aggregateArtistRaw: publicProcedure
    .input(ArtistAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateArtistRaw = await ctx.prisma.artist.aggregateRaw(input);
      return aggregateArtistRaw;
    }),
  createManyArtist: publicProcedure
    .input(ArtistCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyArtist = await ctx.prisma.artist.createMany(input);
      return createManyArtist;
    }),
  createOneArtist: publicProcedure
    .input(ArtistCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneArtist = await ctx.prisma.artist.create(input);
      return createOneArtist;
    }),
  deleteManyArtist: publicProcedure
    .input(ArtistDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyArtist = await ctx.prisma.artist.deleteMany(input);
      return deleteManyArtist;
    }),
  deleteOneArtist: publicProcedure
    .input(ArtistDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneArtist = await ctx.prisma.artist.delete(input);
      return deleteOneArtist;
    }),
  findFirstArtist: publicProcedure
    .input(ArtistFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstArtist = await ctx.prisma.artist.findFirst(input);
      return findFirstArtist;
    }),
  findFirstArtistOrThrow: publicProcedure
    .input(ArtistFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstArtistOrThrow = await ctx.prisma.artist.findFirstOrThrow(input);
      return findFirstArtistOrThrow;
    }),
  findManyArtist: publicProcedure
    .input(ArtistFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyArtist = await ctx.prisma.artist.findMany(input);
      return findManyArtist;
    }),
  findArtistRaw: publicProcedure
    .input(ArtistFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findArtistRaw = await ctx.prisma.artist.findRaw(input);
      return findArtistRaw;
    }),
  findUniqueArtist: publicProcedure
    .input(ArtistFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueArtist = await ctx.prisma.artist.findUnique(input);
      return findUniqueArtist;
    }),
  findUniqueArtistOrThrow: publicProcedure
    .input(ArtistFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueArtistOrThrow = await ctx.prisma.artist.findUniqueOrThrow(input);
      return findUniqueArtistOrThrow;
    }),
  groupByArtist: publicProcedure
    .input(ArtistGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByArtist = await ctx.prisma.artist.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByArtist;
    }),
  updateManyArtist: publicProcedure
    .input(ArtistUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyArtist = await ctx.prisma.artist.updateMany(input);
      return updateManyArtist;
    }),
  updateOneArtist: publicProcedure
    .input(ArtistUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneArtist = await ctx.prisma.artist.update(input);
      return updateOneArtist;
    }),
  upsertOneArtist: publicProcedure
    .input(ArtistUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneArtist = await ctx.prisma.artist.upsert(input);
      return upsertOneArtist;
    }),

})
