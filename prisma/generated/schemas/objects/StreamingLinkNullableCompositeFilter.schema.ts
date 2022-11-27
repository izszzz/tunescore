import { z } from 'zod';
import { StreamingLinkObjectEqualityInputObjectSchema } from './StreamingLinkObjectEqualityInput.schema';
import { StreamingLinkWhereInputObjectSchema } from './StreamingLinkWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StreamingLinkNullableCompositeFilter> = z
  .object({
    equals: z
      .lazy(() => StreamingLinkObjectEqualityInputObjectSchema)
      .optional()
      .nullable(),
    is: z
      .lazy(() => StreamingLinkWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => StreamingLinkWhereInputObjectSchema)
      .optional()
      .nullable(),
    isSet: z.boolean().optional(),
  })
  .strict();

export const StreamingLinkNullableCompositeFilterObjectSchema = Schema;
