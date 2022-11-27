import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArtistScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ArtistScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArtistScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArtistScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ArtistScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    writtenMusicsIDs: z
      .lazy(() => StringNullableListFilterObjectSchema)
      .optional(),
    composedMusicsIDs: z
      .lazy(() => StringNullableListFilterObjectSchema)
      .optional(),
    musicIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    bandIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    userIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict();

export const ArtistScalarWhereWithAggregatesInputObjectSchema = Schema;
