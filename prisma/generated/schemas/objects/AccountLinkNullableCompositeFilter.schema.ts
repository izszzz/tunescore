import { z } from 'zod';
import { AccountLinkObjectEqualityInputObjectSchema } from './AccountLinkObjectEqualityInput.schema';
import { AccountLinkWhereInputObjectSchema } from './AccountLinkWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountLinkNullableCompositeFilter> = z
  .object({
    equals: z
      .lazy(() => AccountLinkObjectEqualityInputObjectSchema)
      .optional()
      .nullable(),
    is: z
      .lazy(() => AccountLinkWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => AccountLinkWhereInputObjectSchema)
      .optional()
      .nullable(),
    isSet: z.boolean().optional(),
  })
  .strict();

export const AccountLinkNullableCompositeFilterObjectSchema = Schema;
