import { z } from 'zod';
import { StreamingLinkNullableCompositeFilterObjectSchema } from './StreamingLinkNullableCompositeFilter.schema';
import { StreamingLinkObjectEqualityInputObjectSchema } from './StreamingLinkObjectEqualityInput.schema';
import { AccountLinkNullableCompositeFilterObjectSchema } from './AccountLinkNullableCompositeFilter.schema';
import { AccountLinkObjectEqualityInputObjectSchema } from './AccountLinkObjectEqualityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LinkWhereInputObjectSchema),
        z.lazy(() => LinkWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LinkWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LinkWhereInputObjectSchema),
        z.lazy(() => LinkWhereInputObjectSchema).array(),
      ])
      .optional(),
    streaming: z
      .union([
        z.lazy(() => StreamingLinkNullableCompositeFilterObjectSchema),
        z.lazy(() => StreamingLinkObjectEqualityInputObjectSchema),
      ])
      .optional()
      .nullable(),
    account: z
      .union([
        z.lazy(() => AccountLinkNullableCompositeFilterObjectSchema),
        z.lazy(() => AccountLinkObjectEqualityInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const LinkWhereInputObjectSchema = Schema;
