import { z } from 'zod';
import { PointActionTypeSchema } from '../enums/PointActionType.schema';
import { PointTypeSchema } from '../enums/PointType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUncheckedCreateWithoutMusicInput> = z
  .object({
    id: z.string().optional(),
    amount: z.number(),
    actionType: z.lazy(() => PointActionTypeSchema),
    userId: z.string(),
    resourceType: z.lazy(() => PointTypeSchema),
    createdAt: z.date().optional(),
  })
  .strict();

export const PointUncheckedCreateWithoutMusicInputObjectSchema = Schema;
