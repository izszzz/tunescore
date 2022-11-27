import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BandScalarWhereInputObjectSchema),
        z.lazy(() => BandScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BandScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BandScalarWhereInputObjectSchema),
        z.lazy(() => BandScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    artistIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    userIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict();

export const BandScalarWhereInputObjectSchema = Schema;
