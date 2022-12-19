import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    type: z.string(),
    createdAt: z.date().optional(),
    readAt: z.date().optional(),
  })
  .strict();

export const NotificationUncheckedCreateWithoutUserInputObjectSchema = Schema;
