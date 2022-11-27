import { z } from 'zod';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountLinkWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccountLinkWhereInputObjectSchema),
        z.lazy(() => AccountLinkWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccountLinkWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountLinkWhereInputObjectSchema),
        z.lazy(() => AccountLinkWhereInputObjectSchema).array(),
      ])
      .optional(),
    twitter: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    wikipedia: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const AccountLinkWhereInputObjectSchema = Schema;
