import { t, publicProcedure } from "./helpers/createRouter";
import { MusicFindUniqueSchema } from "../schemas/findUniqueMusic.schema";
import { MusicFindFirstSchema } from "../schemas/findFirstMusic.schema";
import { MusicFindManySchema } from "../schemas/findManyMusic.schema";
import { MusicCreateOneSchema } from "../schemas/createOneMusic.schema";
import { MusicCreateManySchema } from "../schemas/createManyMusic.schema";
import { MusicDeleteOneSchema } from "../schemas/deleteOneMusic.schema";
import { MusicUpdateOneSchema } from "../schemas/updateOneMusic.schema";
import { MusicDeleteManySchema } from "../schemas/deleteManyMusic.schema";
import { MusicUpdateManySchema } from "../schemas/updateManyMusic.schema";
import { MusicUpsertSchema } from "../schemas/upsertOneMusic.schema";
import { MusicAggregateSchema } from "../schemas/aggregateMusic.schema";
import { MusicGroupBySchema } from "../schemas/groupByMusic.schema";
import { MusicFindRawObjectSchema } from "../schemas/objects/MusicFindRaw.schema";
import { MusicAggregateRawObjectSchema } from "../schemas/objects/MusicAggregateRaw.schema";

export const musicRouter = t.router({
  aggregateMusic: publicProcedure
    .input(MusicAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateMusic = await ctx.prisma.music.aggregate(input);
      return aggregateMusic;
    }),
  aggregateMusicRaw: publicProcedure
    .input(MusicAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateMusicRaw = await ctx.prisma.music.aggregateRaw(input);
      return aggregateMusicRaw;
    }),
  createManyMusic: publicProcedure
    .input(MusicCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyMusic = await ctx.prisma.music.createMany(input);
      return createManyMusic;
    }),
  createOneMusic: publicProcedure
    .input(MusicCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneMusic = await ctx.prisma.music.create(input);
      return createOneMusic;
    }),
  deleteManyMusic: publicProcedure
    .input(MusicDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyMusic = await ctx.prisma.music.deleteMany(input);
      return deleteManyMusic;
    }),
  deleteOneMusic: publicProcedure
    .input(MusicDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneMusic = await ctx.prisma.music.delete(input);
      return deleteOneMusic;
    }),
  findFirstMusic: publicProcedure
    .input(MusicFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstMusic = await ctx.prisma.music.findFirst(input);
      return findFirstMusic;
    }),
  findFirstMusicOrThrow: publicProcedure
    .input(MusicFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstMusicOrThrow = await ctx.prisma.music.findFirstOrThrow(input);
      return findFirstMusicOrThrow;
    }),
  findManyMusic: publicProcedure
    .input(MusicFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyMusic = await ctx.prisma.music.findMany(input);
      return findManyMusic;
    }),
  findMusicRaw: publicProcedure
    .input(MusicFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findMusicRaw = await ctx.prisma.music.findRaw(input);
      return findMusicRaw;
    }),
  findUniqueMusic: publicProcedure
    .input(MusicFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueMusic = await ctx.prisma.music.findUnique(input);
      return findUniqueMusic;
    }),
  findUniqueMusicOrThrow: publicProcedure
    .input(MusicFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueMusicOrThrow = await ctx.prisma.music.findUniqueOrThrow(input);
      return findUniqueMusicOrThrow;
    }),
  groupByMusic: publicProcedure
    .input(MusicGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByMusic = await ctx.prisma.music.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByMusic;
    }),
  updateManyMusic: publicProcedure
    .input(MusicUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyMusic = await ctx.prisma.music.updateMany(input);
      return updateManyMusic;
    }),
  updateOneMusic: publicProcedure
    .input(MusicUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneMusic = await ctx.prisma.music.update(input);
      return updateOneMusic;
    }),
  upsertOneMusic: publicProcedure
    .input(MusicUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneMusic = await ctx.prisma.music.upsert(input);
      return upsertOneMusic;
    }),

})
