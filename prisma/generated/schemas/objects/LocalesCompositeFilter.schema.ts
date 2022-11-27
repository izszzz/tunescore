import { z } from 'zod';
import { LocalesObjectEqualityInputObjectSchema } from './LocalesObjectEqualityInput.schema';
import { LocalesWhereInputObjectSchema } from './LocalesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocalesCompositeFilter> = z
  .object({
    equals: z.lazy(() => LocalesObjectEqualityInputObjectSchema).optional(),
    is: z.lazy(() => LocalesWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => LocalesWhereInputObjectSchema).optional(),
  })
  .strict();

export const LocalesCompositeFilterObjectSchema = Schema;
