import { z } from 'zod';
import { PointActionTypeSchema } from '../enums/PointActionType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumPointActionTypeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => PointActionTypeSchema).optional(),
    })
    .strict();

export const EnumPointActionTypeFieldUpdateOperationsInputObjectSchema = Schema;
