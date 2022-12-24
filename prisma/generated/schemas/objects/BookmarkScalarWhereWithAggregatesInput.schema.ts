import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { EnumBookmarkTypeWithAggregatesFilterObjectSchema } from './EnumBookmarkTypeWithAggregatesFilter.schema';
import { BookmarkTypeSchema } from '../enums/BookmarkType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BookmarkScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => BookmarkScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BookmarkScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BookmarkScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => BookmarkScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    userIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    resourceId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => EnumBookmarkTypeWithAggregatesFilterObjectSchema),
        z.lazy(() => BookmarkTypeSchema),
      ])
      .optional(),
  })
  .strict();

export const BookmarkScalarWhereWithAggregatesInputObjectSchema = Schema;
