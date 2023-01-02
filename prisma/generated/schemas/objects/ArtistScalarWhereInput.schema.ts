import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArtistScalarWhereInputObjectSchema),
        z.lazy(() => ArtistScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArtistScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArtistScalarWhereInputObjectSchema),
        z.lazy(() => ArtistScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    bandIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    albumIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict();

export const ArtistScalarWhereInputObjectSchema = Schema;
