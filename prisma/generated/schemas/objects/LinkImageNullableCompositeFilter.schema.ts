import { z } from 'zod';
import { LinkImageObjectEqualityInputObjectSchema } from './LinkImageObjectEqualityInput.schema';
import { LinkImageWhereInputObjectSchema } from './LinkImageWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkImageNullableCompositeFilter> = z
  .object({
    equals: z
      .lazy(() => LinkImageObjectEqualityInputObjectSchema)
      .optional()
      .nullable(),
    is: z
      .lazy(() => LinkImageWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => LinkImageWhereInputObjectSchema)
      .optional()
      .nullable(),
    isSet: z.boolean().optional(),
  })
  .strict();

export const LinkImageNullableCompositeFilterObjectSchema = Schema;
