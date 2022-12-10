import { createRouter } from "./helpers/createRouter";
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

export const artistsRouter = createRouter()

  .query("aggregateArtist", {
    input: ArtistAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateArtist = await ctx.prisma.artist.aggregate(input);
      return aggregateArtist;
    },
  })

  .query("aggregateArtistRaw", {
    input: ArtistAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateArtistRaw = await ctx.prisma.artist.aggregateRaw(input);
      return aggregateArtistRaw;
    },
  })

  .mutation("createManyArtist", {
    input: ArtistCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyArtist = await ctx.prisma.artist.createMany(input);
      return createManyArtist;
    },
  })

  .mutation("createOneArtist", {
    input: ArtistCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneArtist = await ctx.prisma.artist.create(input);
      return createOneArtist;
    },
  })

  .mutation("deleteManyArtist", {
    input: ArtistDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyArtist = await ctx.prisma.artist.deleteMany(input);
      return deleteManyArtist;
    },
  })

  .mutation("deleteOneArtist", {
    input: ArtistDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneArtist = await ctx.prisma.artist.delete(input);
      return deleteOneArtist;
    },
  })

  .query("findFirstArtist", {
    input: ArtistFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstArtist = await ctx.prisma.artist.findFirst(input);
      return findFirstArtist;
    },
  })

  .query("findFirstArtistOrThrow", {
    input: ArtistFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstArtistOrThrow = await ctx.prisma.artist.findFirstOrThrow(input);
      return findFirstArtistOrThrow;
    },
  })

  .query("findManyArtist", {
    input: ArtistFindManySchema,
    async resolve({ ctx, input }) {
      const findManyArtist = await ctx.prisma.artist.findMany(input);
      return findManyArtist;
    },
  })

  .query("findArtistRaw", {
    input: ArtistFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findArtistRaw = await ctx.prisma.artist.findRaw(input);
      return findArtistRaw;
    },
  })

  .query("findUniqueArtist", {
    input: ArtistFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueArtist = await ctx.prisma.artist.findUnique(input);
      return findUniqueArtist;
    },
  })

  .query("findUniqueArtistOrThrow", {
    input: ArtistFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueArtistOrThrow = await ctx.prisma.artist.findUniqueOrThrow(input);
      return findUniqueArtistOrThrow;
    },
  })

  .query("groupByArtist", {
    input: ArtistGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByArtist = await ctx.prisma.artist.groupBy(input);
      return groupByArtist;
    },
  })

  .mutation("updateManyArtist", {
    input: ArtistUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyArtist = await ctx.prisma.artist.updateMany(input);
      return updateManyArtist;
    },
  })

  .mutation("updateOneArtist", {
    input: ArtistUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneArtist = await ctx.prisma.artist.update(input);
      return updateOneArtist;
    },
  })

  .mutation("upsertOneArtist", {
    input: ArtistUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneArtist = await ctx.prisma.artist.upsert(input);
      return upsertOneArtist;
    },
  })
