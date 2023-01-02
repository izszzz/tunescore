import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumMusicTypeFilterObjectSchema } from './EnumMusicTypeFilter.schema';
import { MusicTypeSchema } from '../enums/MusicType.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumVisibilityFilterObjectSchema } from './EnumVisibilityFilter.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MusicScalarWhereInputObjectSchema),
        z.lazy(() => MusicScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MusicScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MusicScalarWhereInputObjectSchema),
        z.lazy(() => MusicScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumMusicTypeFilterObjectSchema),
        z.lazy(() => MusicTypeSchema),
      ])
      .optional(),
    score: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    visibility: z
      .union([
        z.lazy(() => EnumVisibilityFilterObjectSchema),
        z.lazy(() => VisibilitySchema),
      ])
      .optional(),
    price: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    userId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    bandId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    albumIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict();

export const MusicScalarWhereInputObjectSchema = Schema;
