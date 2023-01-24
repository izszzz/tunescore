import { z } from 'zod';
import { PointActionTypeSchema } from '../enums/PointActionType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    amount: z.number(),
    actionType: z.lazy(() => PointActionTypeSchema),
    userId: z.string(),
    createdAt: z.date().optional(),
  })
  .strict();

export const PointUncheckedCreateInputObjectSchema = Schema;
