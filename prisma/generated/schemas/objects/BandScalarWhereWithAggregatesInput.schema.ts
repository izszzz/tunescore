import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BandScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => BandScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BandScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BandScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => BandScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    artistIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    userIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict();

export const BandScalarWhereWithAggregatesInputObjectSchema = Schema;
