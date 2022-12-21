import { z } from 'zod';
import { LinkNullableCompositeFilterObjectSchema } from './LinkNullableCompositeFilter.schema';
import { LinkObjectEqualityInputObjectSchema } from './LinkObjectEqualityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StreamingLinkWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StreamingLinkWhereInputObjectSchema),
        z.lazy(() => StreamingLinkWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StreamingLinkWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StreamingLinkWhereInputObjectSchema),
        z.lazy(() => StreamingLinkWhereInputObjectSchema).array(),
      ])
      .optional(),
    youtube: z
      .union([
        z.lazy(() => LinkNullableCompositeFilterObjectSchema),
        z.lazy(() => LinkObjectEqualityInputObjectSchema),
      ])
      .optional()
      .nullable(),
    spotify: z
      .union([
        z.lazy(() => LinkNullableCompositeFilterObjectSchema),
        z.lazy(() => LinkObjectEqualityInputObjectSchema),
      ])
      .optional()
      .nullable(),
    itunes: z
      .union([
        z.lazy(() => LinkNullableCompositeFilterObjectSchema),
        z.lazy(() => LinkObjectEqualityInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const StreamingLinkWhereInputObjectSchema = Schema;
