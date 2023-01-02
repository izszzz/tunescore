import { createRouter } from "./helpers/createRouter";
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

export const participationsRouter = createRouter()

  .query("aggregateParticipation", {
    input: ParticipationAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateParticipation = await ctx.prisma.participation.aggregate(input);
      return aggregateParticipation;
    },
  })

  .query("aggregateParticipationRaw", {
    input: ParticipationAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateParticipationRaw = await ctx.prisma.participation.aggregateRaw(input);
      return aggregateParticipationRaw;
    },
  })

  .mutation("createManyParticipation", {
    input: ParticipationCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyParticipation = await ctx.prisma.participation.createMany(input);
      return createManyParticipation;
    },
  })

  .mutation("createOneParticipation", {
    input: ParticipationCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneParticipation = await ctx.prisma.participation.create(input);
      return createOneParticipation;
    },
  })

  .mutation("deleteManyParticipation", {
    input: ParticipationDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyParticipation = await ctx.prisma.participation.deleteMany(input);
      return deleteManyParticipation;
    },
  })

  .mutation("deleteOneParticipation", {
    input: ParticipationDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneParticipation = await ctx.prisma.participation.delete(input);
      return deleteOneParticipation;
    },
  })

  .query("findFirstParticipation", {
    input: ParticipationFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstParticipation = await ctx.prisma.participation.findFirst(input);
      return findFirstParticipation;
    },
  })

  .query("findFirstParticipationOrThrow", {
    input: ParticipationFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstParticipationOrThrow = await ctx.prisma.participation.findFirstOrThrow(input);
      return findFirstParticipationOrThrow;
    },
  })

  .query("findManyParticipation", {
    input: ParticipationFindManySchema,
    async resolve({ ctx, input }) {
      const findManyParticipation = await ctx.prisma.participation.findMany(input);
      return findManyParticipation;
    },
  })

  .query("findParticipationRaw", {
    input: ParticipationFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findParticipationRaw = await ctx.prisma.participation.findRaw(input);
      return findParticipationRaw;
    },
  })

  .query("findUniqueParticipation", {
    input: ParticipationFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueParticipation = await ctx.prisma.participation.findUnique(input);
      return findUniqueParticipation;
    },
  })

  .query("findUniqueParticipationOrThrow", {
    input: ParticipationFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueParticipationOrThrow = await ctx.prisma.participation.findUniqueOrThrow(input);
      return findUniqueParticipationOrThrow;
    },
  })

  .query("groupByParticipation", {
    input: ParticipationGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByParticipation = await ctx.prisma.participation.groupBy(input);
      return groupByParticipation;
    },
  })

  .mutation("updateManyParticipation", {
    input: ParticipationUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyParticipation = await ctx.prisma.participation.updateMany(input);
      return updateManyParticipation;
    },
  })

  .mutation("updateOneParticipation", {
    input: ParticipationUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneParticipation = await ctx.prisma.participation.update(input);
      return updateOneParticipation;
    },
  })

  .mutation("upsertOneParticipation", {
    input: ParticipationUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneParticipation = await ctx.prisma.participation.upsert(input);
      return upsertOneParticipation;
    },
  })
