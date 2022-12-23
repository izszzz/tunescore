import { z } from 'zod';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    type: z.string(),
    resourceId: z.number(),
    resurceType: z.lazy(() => NotificationTypeSchema),
    createdAt: z.date().optional(),
    readAt: z.date().optional(),
    userId: z.string(),
  })
  .strict();

export const NotificationUncheckedCreateInputObjectSchema = Schema;
