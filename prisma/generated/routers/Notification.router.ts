import { createRouter } from "./helpers/createRouter";
import { NotificationFindUniqueSchema } from "../schemas/findUniqueNotification.schema";
import { NotificationFindFirstSchema } from "../schemas/findFirstNotification.schema";
import { NotificationFindManySchema } from "../schemas/findManyNotification.schema";
import { NotificationCreateOneSchema } from "../schemas/createOneNotification.schema";
import { NotificationCreateManySchema } from "../schemas/createManyNotification.schema";
import { NotificationDeleteOneSchema } from "../schemas/deleteOneNotification.schema";
import { NotificationUpdateOneSchema } from "../schemas/updateOneNotification.schema";
import { NotificationDeleteManySchema } from "../schemas/deleteManyNotification.schema";
import { NotificationUpdateManySchema } from "../schemas/updateManyNotification.schema";
import { NotificationUpsertSchema } from "../schemas/upsertOneNotification.schema";
import { NotificationAggregateSchema } from "../schemas/aggregateNotification.schema";
import { NotificationGroupBySchema } from "../schemas/groupByNotification.schema";
import { NotificationFindRawObjectSchema } from "../schemas/objects/NotificationFindRaw.schema";
import { NotificationAggregateRawObjectSchema } from "../schemas/objects/NotificationAggregateRaw.schema";

export const notificationsRouter = createRouter()

  .query("aggregateNotification", {
    input: NotificationAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateNotification = await ctx.prisma.notification.aggregate(input);
      return aggregateNotification;
    },
  })

  .query("aggregateNotificationRaw", {
    input: NotificationAggregateRawObjectSchema,
    async resolve({ ctx, input }) {
      const aggregateNotificationRaw = await ctx.prisma.notification.aggregateRaw(input);
      return aggregateNotificationRaw;
    },
  })

  .mutation("createManyNotification", {
    input: NotificationCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyNotification = await ctx.prisma.notification.createMany(input);
      return createManyNotification;
    },
  })

  .mutation("createOneNotification", {
    input: NotificationCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneNotification = await ctx.prisma.notification.create(input);
      return createOneNotification;
    },
  })

  .mutation("deleteManyNotification", {
    input: NotificationDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyNotification = await ctx.prisma.notification.deleteMany(input);
      return deleteManyNotification;
    },
  })

  .mutation("deleteOneNotification", {
    input: NotificationDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneNotification = await ctx.prisma.notification.delete(input);
      return deleteOneNotification;
    },
  })

  .query("findFirstNotification", {
    input: NotificationFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstNotification = await ctx.prisma.notification.findFirst(input);
      return findFirstNotification;
    },
  })

  .query("findFirstNotificationOrThrow", {
    input: NotificationFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstNotificationOrThrow = await ctx.prisma.notification.findFirstOrThrow(input);
      return findFirstNotificationOrThrow;
    },
  })

  .query("findManyNotification", {
    input: NotificationFindManySchema,
    async resolve({ ctx, input }) {
      const findManyNotification = await ctx.prisma.notification.findMany(input);
      return findManyNotification;
    },
  })

  .query("findNotificationRaw", {
    input: NotificationFindRawObjectSchema,
    async resolve({ ctx, input }) {
      const findNotificationRaw = await ctx.prisma.notification.findRaw(input);
      return findNotificationRaw;
    },
  })

  .query("findUniqueNotification", {
    input: NotificationFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueNotification = await ctx.prisma.notification.findUnique(input);
      return findUniqueNotification;
    },
  })

  .query("findUniqueNotificationOrThrow", {
    input: NotificationFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueNotificationOrThrow = await ctx.prisma.notification.findUniqueOrThrow(input);
      return findUniqueNotificationOrThrow;
    },
  })

  .query("groupByNotification", {
    input: NotificationGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByNotification = await ctx.prisma.notification.groupBy(input);
      return groupByNotification;
    },
  })

  .mutation("updateManyNotification", {
    input: NotificationUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyNotification = await ctx.prisma.notification.updateMany(input);
      return updateManyNotification;
    },
  })

  .mutation("updateOneNotification", {
    input: NotificationUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneNotification = await ctx.prisma.notification.update(input);
      return updateOneNotification;
    },
  })

  .mutation("upsertOneNotification", {
    input: NotificationUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneNotification = await ctx.prisma.notification.upsert(input);
      return upsertOneNotification;
    },
  })
