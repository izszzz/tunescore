import { t, shieldedProcedure } from "./helpers/createRouter";
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

export const notificationsRouter = t.router({
  aggregateNotification: shieldedProcedure
    .input(NotificationAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateNotification = await ctx.prisma.notification.aggregate(input);
      return aggregateNotification;
    }),
  aggregateNotificationRaw: shieldedProcedure
    .input(NotificationAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateNotificationRaw = await ctx.prisma.notification.aggregateRaw(input);
      return aggregateNotificationRaw;
    }),
  createManyNotification: shieldedProcedure
    .input(NotificationCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyNotification = await ctx.prisma.notification.createMany(input);
      return createManyNotification;
    }),
  createOneNotification: shieldedProcedure
    .input(NotificationCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneNotification = await ctx.prisma.notification.create(input);
      return createOneNotification;
    }),
  deleteManyNotification: shieldedProcedure
    .input(NotificationDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyNotification = await ctx.prisma.notification.deleteMany(input);
      return deleteManyNotification;
    }),
  deleteOneNotification: shieldedProcedure
    .input(NotificationDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneNotification = await ctx.prisma.notification.delete(input);
      return deleteOneNotification;
    }),
  findFirstNotification: shieldedProcedure
    .input(NotificationFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstNotification = await ctx.prisma.notification.findFirst(input);
      return findFirstNotification;
    }),
  findFirstNotificationOrThrow: shieldedProcedure
    .input(NotificationFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstNotificationOrThrow = await ctx.prisma.notification.findFirstOrThrow(input);
      return findFirstNotificationOrThrow;
    }),
  findManyNotification: shieldedProcedure
    .input(NotificationFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyNotification = await ctx.prisma.notification.findMany(input);
      return findManyNotification;
    }),
  findNotificationRaw: shieldedProcedure
    .input(NotificationFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findNotificationRaw = await ctx.prisma.notification.findRaw(input);
      return findNotificationRaw;
    }),
  findUniqueNotification: shieldedProcedure
    .input(NotificationFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueNotification = await ctx.prisma.notification.findUnique(input);
      return findUniqueNotification;
    }),
  findUniqueNotificationOrThrow: shieldedProcedure
    .input(NotificationFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueNotificationOrThrow = await ctx.prisma.notification.findUniqueOrThrow(input);
      return findUniqueNotificationOrThrow;
    }),
  groupByNotification: shieldedProcedure
    .input(NotificationGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByNotification = await ctx.prisma.notification.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByNotification;
    }),
  updateManyNotification: shieldedProcedure
    .input(NotificationUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyNotification = await ctx.prisma.notification.updateMany(input);
      return updateManyNotification;
    }),
  updateOneNotification: shieldedProcedure
    .input(NotificationUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneNotification = await ctx.prisma.notification.update(input);
      return updateOneNotification;
    }),
  upsertOneNotification: shieldedProcedure
    .input(NotificationUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneNotification = await ctx.prisma.notification.upsert(input);
      return upsertOneNotification;
    }),

})
