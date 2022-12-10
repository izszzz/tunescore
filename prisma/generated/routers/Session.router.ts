import { createRouter } from "./helpers/createRouter";
import { SessionFindUniqueSchema } from "../schemas/findUniqueSession.schema";
import { SessionFindFirstSchema } from "../schemas/findFirstSession.schema";
import { SessionFindManySchema } from "../schemas/findManySession.schema";
import { SessionCreateOneSchema } from "../schemas/createOneSession.schema";
import { SessionCreateManySchema } from "../schemas/createManySession.schema";
import { SessionDeleteOneSchema } from "../schemas/deleteOneSession.schema";
import { SessionUpdateOneSchema } from "../schemas/updateOneSession.schema";
import { SessionDeleteManySchema } from "../schemas/deleteManySession.schema";
import { SessionUpdateManySchema } from "../schemas/updateManySession.schema";
import { SessionUpsertSchema } from "../schemas/upsertOneSession.schema";
import { SessionAggregateSchema } from "../schemas/aggregateSession.schema";
import { SessionGroupBySchema } from "../schemas/groupBySession.schema";
import { SessionFindRawObjectSchema } from "../schemas/objects/SessionFindRaw.schema";
import { SessionAggregateRawObjectSchema } from "../schemas/objects/SessionAggregateRaw.schema";

export const sessionsRouter = createRouter()

  .query("aggregateSession", {
    input: SessionAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateSession = await ctx.prisma.session.aggregate(input);
      return aggregateSession;
    },
  })

  .query("aggregateSessionRaw", {
    input: SessionAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateSessionRaw = await ctx.prisma.session.aggregateRaw(input);
      return aggregateSessionRaw;
    },
  })

  .mutation("createManySession", {
    input: SessionCreateManySchema,
    async resolve({ ctx, input }) {
      const createManySession = await ctx.prisma.session.createMany(input);
      return createManySession;
    },
  })

  .mutation("createOneSession", {
    input: SessionCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneSession = await ctx.prisma.session.create(input);
      return createOneSession;
    },
  })

  .mutation("deleteManySession", {
    input: SessionDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManySession = await ctx.prisma.session.deleteMany(input);
      return deleteManySession;
    },
  })

  .mutation("deleteOneSession", {
    input: SessionDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneSession = await ctx.prisma.session.delete(input);
      return deleteOneSession;
    },
  })

  .query("findFirstSession", {
    input: SessionFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstSession = await ctx.prisma.session.findFirst(input);
      return findFirstSession;
    },
  })

  .query("findFirstSessionOrThrow", {
    input: SessionFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstSessionOrThrow = await ctx.prisma.session.findFirstOrThrow(input);
      return findFirstSessionOrThrow;
    },
  })

  .query("findManySession", {
    input: SessionFindManySchema,
    async resolve({ ctx, input }) {
      const findManySession = await ctx.prisma.session.findMany(input);
      return findManySession;
    },
  })

  .query("findSessionRaw", {
    input: SessionFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findSessionRaw = await ctx.prisma.session.findRaw(input);
      return findSessionRaw;
    },
  })

  .query("findUniqueSession", {
    input: SessionFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueSession = await ctx.prisma.session.findUnique(input);
      return findUniqueSession;
    },
  })

  .query("findUniqueSessionOrThrow", {
    input: SessionFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueSessionOrThrow = await ctx.prisma.session.findUniqueOrThrow(input);
      return findUniqueSessionOrThrow;
    },
  })

  .query("groupBySession", {
    input: SessionGroupBySchema,
    async resolve({ ctx, input }) {
      const groupBySession = await ctx.prisma.session.groupBy(input);
      return groupBySession;
    },
  })

  .mutation("updateManySession", {
    input: SessionUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManySession = await ctx.prisma.session.updateMany(input);
      return updateManySession;
    },
  })

  .mutation("updateOneSession", {
    input: SessionUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneSession = await ctx.prisma.session.update(input);
      return updateOneSession;
    },
  })

  .mutation("upsertOneSession", {
    input: SessionUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneSession = await ctx.prisma.session.upsert(input);
      return upsertOneSession;
    },
  })
