import { z } from 'zod';
import { LocaleObjectEqualityInputObjectSchema } from './LocaleObjectEqualityInput.schema';
import { LocaleWhereInputObjectSchema } from './LocaleWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocaleCompositeFilter> = z
  .object({
    equals: z.lazy(() => LocaleObjectEqualityInputObjectSchema).optional(),
    is: z.lazy(() => LocaleWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => LocaleWhereInputObjectSchema).optional(),
  })
  .strict();

export const LocaleCompositeFilterObjectSchema = Schema;
