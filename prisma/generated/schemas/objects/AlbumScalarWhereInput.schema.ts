import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AlbumScalarWhereInputObjectSchema),
        z.lazy(() => AlbumScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AlbumScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AlbumScalarWhereInputObjectSchema),
        z.lazy(() => AlbumScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    bandId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    musicIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    artistIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    userIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict();

export const AlbumScalarWhereInputObjectSchema = Schema;
