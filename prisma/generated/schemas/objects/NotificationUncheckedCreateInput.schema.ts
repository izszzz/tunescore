import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    type: z.string(),
    createdAt: z.date().optional(),
    readAt: z.date().optional(),
    userId: z.string(),
  })
  .strict();

export const NotificationUncheckedCreateInputObjectSchema = Schema;
