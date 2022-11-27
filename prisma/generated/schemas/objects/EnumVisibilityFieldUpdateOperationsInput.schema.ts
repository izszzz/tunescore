import { z } from 'zod';
import { VisibilitySchema } from '../enums/Visibility.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumVisibilityFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => VisibilitySchema).optional(),
  })
  .strict();

export const EnumVisibilityFieldUpdateOperationsInputObjectSchema = Schema;
