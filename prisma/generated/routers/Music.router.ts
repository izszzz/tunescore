import { t, shieldedProcedure } from "./helpers/createRouter";
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
  aggregateMusic: shieldedProcedure
    .input(MusicAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateMusic = await ctx.prisma.music.aggregate(input);
      return aggregateMusic;
    }),
  aggregateMusicRaw: shieldedProcedure
    .input(MusicAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateMusicRaw = await ctx.prisma.music.aggregateRaw(input);
      return aggregateMusicRaw;
    }),
  createManyMusic: shieldedProcedure
    .input(MusicCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyMusic = await ctx.prisma.music.createMany(input);
      return createManyMusic;
    }),
  createOneMusic: shieldedProcedure
    .input(MusicCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneMusic = await ctx.prisma.music.create(input);
      return createOneMusic;
    }),
  deleteManyMusic: shieldedProcedure
    .input(MusicDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyMusic = await ctx.prisma.music.deleteMany(input);
      return deleteManyMusic;
    }),
  deleteOneMusic: shieldedProcedure
    .input(MusicDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneMusic = await ctx.prisma.music.delete(input);
      return deleteOneMusic;
    }),
  findFirstMusic: shieldedProcedure
    .input(MusicFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstMusic = await ctx.prisma.music.findFirst(input);
      return findFirstMusic;
    }),
  findFirstMusicOrThrow: shieldedProcedure
    .input(MusicFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstMusicOrThrow = await ctx.prisma.music.findFirstOrThrow(input);
      return findFirstMusicOrThrow;
    }),
  findManyMusic: shieldedProcedure
    .input(MusicFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyMusic = await ctx.prisma.music.findMany(input);
      return findManyMusic;
    }),
  findMusicRaw: shieldedProcedure
    .input(MusicFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findMusicRaw = await ctx.prisma.music.findRaw(input);
      return findMusicRaw;
    }),
  findUniqueMusic: shieldedProcedure
    .input(MusicFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueMusic = await ctx.prisma.music.findUnique(input);
      return findUniqueMusic;
    }),
  findUniqueMusicOrThrow: shieldedProcedure
    .input(MusicFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueMusicOrThrow = await ctx.prisma.music.findUniqueOrThrow(input);
      return findUniqueMusicOrThrow;
    }),
  groupByMusic: shieldedProcedure
    .input(MusicGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByMusic = await ctx.prisma.music.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByMusic;
    }),
  updateManyMusic: shieldedProcedure
    .input(MusicUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyMusic = await ctx.prisma.music.updateMany(input);
      return updateManyMusic;
    }),
  updateOneMusic: shieldedProcedure
    .input(MusicUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneMusic = await ctx.prisma.music.update(input);
      return updateOneMusic;
    }),
  upsertOneMusic: shieldedProcedure
    .input(MusicUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneMusic = await ctx.prisma.music.upsert(input);
      return upsertOneMusic;
    }),

})
