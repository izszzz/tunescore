import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumTypeWithAggregatesFilterObjectSchema } from './EnumTypeWithAggregatesFilter.schema';
import { TypeSchema } from '../enums/Type.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumVisibilityWithAggregatesFilterObjectSchema } from './EnumVisibilityWithAggregatesFilter.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MusicScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => MusicScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MusicScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MusicScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => MusicScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumTypeWithAggregatesFilterObjectSchema),
        z.lazy(() => TypeSchema),
      ])
      .optional(),
    score: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    visibility: z
      .union([
        z.lazy(() => EnumVisibilityWithAggregatesFilterObjectSchema),
        z.lazy(() => VisibilitySchema),
      ])
      .optional(),
    image: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    price: z
      .union([
        z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    userId: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    bandId: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    albumIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    composerIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    lyristIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    artistIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    userIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict();

export const MusicScalarWhereWithAggregatesInputObjectSchema = Schema;
