import { z } from 'zod';
import { TypeSchema } from '../enums/Type.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => TypeSchema).optional(),
  })
  .strict();

export const EnumTypeFieldUpdateOperationsInputObjectSchema = Schema;
