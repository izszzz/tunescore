import { z } from 'zod';
import { LinkListObjectEqualityInputObjectSchema } from './LinkListObjectEqualityInput.schema';
import { LinkListWhereInputObjectSchema } from './LinkListWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkListNullableCompositeFilter> = z
  .object({
    equals: z
      .lazy(() => LinkListObjectEqualityInputObjectSchema)
      .optional()
      .nullable(),
    is: z
      .lazy(() => LinkListWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => LinkListWhereInputObjectSchema)
      .optional()
      .nullable(),
    isSet: z.boolean().optional(),
  })
  .strict();

export const LinkListNullableCompositeFilterObjectSchema = Schema;
