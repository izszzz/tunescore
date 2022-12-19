import { z } from 'zod';
import { UserCreateNestedOneWithoutNotificationsInputObjectSchema } from './UserCreateNestedOneWithoutNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateInput> = z
  .object({
    id: z.string().optional(),
    type: z.string(),
    createdAt: z.date().optional(),
    readAt: z.date().optional(),
    user: z.lazy(
      () => UserCreateNestedOneWithoutNotificationsInputObjectSchema,
    ),
  })
  .strict();

export const NotificationCreateInputObjectSchema = Schema;
