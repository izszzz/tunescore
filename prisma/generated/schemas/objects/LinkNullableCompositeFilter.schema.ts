import { z } from 'zod';
import { LinkObjectEqualityInputObjectSchema } from './LinkObjectEqualityInput.schema';
import { LinkWhereInputObjectSchema } from './LinkWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkNullableCompositeFilter> = z
  .object({
    equals: z
      .lazy(() => LinkObjectEqualityInputObjectSchema)
      .optional()
      .nullable(),
    is: z
      .lazy(() => LinkWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => LinkWhereInputObjectSchema)
      .optional()
      .nullable(),
    isSet: z.boolean().optional(),
  })
  .strict();

export const LinkNullableCompositeFilterObjectSchema = Schema;
