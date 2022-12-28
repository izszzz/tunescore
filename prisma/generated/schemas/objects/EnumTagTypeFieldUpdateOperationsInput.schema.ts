import { z } from 'zod';
import { TagTypeSchema } from '../enums/TagType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumTagTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => TagTypeSchema).optional(),
  })
  .strict();

export const EnumTagTypeFieldUpdateOperationsInputObjectSchema = Schema;
