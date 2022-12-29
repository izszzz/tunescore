import { z } from 'zod';
import { ThemeTypeSchema } from '../enums/ThemeType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumThemeTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => ThemeTypeSchema).optional(),
  })
  .strict();

export const EnumThemeTypeFieldUpdateOperationsInputObjectSchema = Schema;
