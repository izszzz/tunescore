import { z } from 'zod';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    resourceId: z.string(),
    resourceType: z.lazy(() => NotificationTypeSchema),
    createdAt: z.date().optional(),
    readAt: z.date().optional(),
  })
  .strict();

export const NotificationUncheckedCreateInputObjectSchema = Schema;
