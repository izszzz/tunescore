import { z } from 'zod';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUncheckedCreateWithoutFollowedInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      resurceType: z.lazy(() => NotificationTypeSchema),
      createdAt: z.date().optional(),
      readAt: z.date().optional(),
    })
    .strict();

export const NotificationUncheckedCreateWithoutFollowedInputObjectSchema =
  Schema;
