import { createRouter } from "./helpers/createRouter";
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

export const musicRouter = createRouter()

  .query("aggregateMusic", {
    input: MusicAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateMusic = await ctx.prisma.music.aggregate(input);
      return aggregateMusic;
    },
  })

  .query("aggregateMusicRaw", {
    input: MusicAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateMusicRaw = await ctx.prisma.music.aggregateRaw(input);
      return aggregateMusicRaw;
    },
  })

  .mutation("createManyMusic", {
    input: MusicCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyMusic = await ctx.prisma.music.createMany(input);
      return createManyMusic;
    },
  })

  .mutation("createOneMusic", {
    input: MusicCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneMusic = await ctx.prisma.music.create(input);
      return createOneMusic;
    },
  })

  .mutation("deleteManyMusic", {
    input: MusicDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyMusic = await ctx.prisma.music.deleteMany(input);
      return deleteManyMusic;
    },
  })

  .mutation("deleteOneMusic", {
    input: MusicDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneMusic = await ctx.prisma.music.delete(input);
      return deleteOneMusic;
    },
  })

  .query("findFirstMusic", {
    input: MusicFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstMusic = await ctx.prisma.music.findFirst(input);
      return findFirstMusic;
    },
  })

  .query("findFirstMusicOrThrow", {
    input: MusicFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstMusicOrThrow = await ctx.prisma.music.findFirstOrThrow(input);
      return findFirstMusicOrThrow;
    },
  })

  .query("findManyMusic", {
    input: MusicFindManySchema,
    async resolve({ ctx, input }) {
      const findManyMusic = await ctx.prisma.music.findMany(input);
      return findManyMusic;
    },
  })

  .query("findMusicRaw", {
    input: MusicFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findMusicRaw = await ctx.prisma.music.findRaw(input);
      return findMusicRaw;
    },
  })

  .query("findUniqueMusic", {
    input: MusicFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueMusic = await ctx.prisma.music.findUnique(input);
      return findUniqueMusic;
    },
  })

  .query("findUniqueMusicOrThrow", {
    input: MusicFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueMusicOrThrow = await ctx.prisma.music.findUniqueOrThrow(input);
      return findUniqueMusicOrThrow;
    },
  })

  .query("groupByMusic", {
    input: MusicGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByMusic = await ctx.prisma.music.groupBy(input);
      return groupByMusic;
    },
  })

  .mutation("updateManyMusic", {
    input: MusicUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyMusic = await ctx.prisma.music.updateMany(input);
      return updateManyMusic;
    },
  })

  .mutation("updateOneMusic", {
    input: MusicUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneMusic = await ctx.prisma.music.update(input);
      return updateOneMusic;
    },
  })

  .mutation("upsertOneMusic", {
    input: MusicUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneMusic = await ctx.prisma.music.upsert(input);
      return upsertOneMusic;
    },
  })
