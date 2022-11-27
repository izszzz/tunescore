import { z } from 'zod';
import { PullStatusSchema } from '../enums/PullStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumPullStatusFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => PullStatusSchema).optional(),
  })
  .strict();

export const EnumPullStatusFieldUpdateOperationsInputObjectSchema = Schema;
