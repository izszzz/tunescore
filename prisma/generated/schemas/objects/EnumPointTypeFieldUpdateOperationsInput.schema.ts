import { z } from 'zod';
import { PointTypeSchema } from '../enums/PointType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumPointTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => PointTypeSchema).optional(),
  })
  .strict();

export const EnumPointTypeFieldUpdateOperationsInputObjectSchema = Schema;
