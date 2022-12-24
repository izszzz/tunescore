import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { EnumBookmarkTypeFilterObjectSchema } from './EnumBookmarkTypeFilter.schema';
import { BookmarkTypeSchema } from '../enums/BookmarkType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BookmarkScalarWhereInputObjectSchema),
        z.lazy(() => BookmarkScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BookmarkScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BookmarkScalarWhereInputObjectSchema),
        z.lazy(() => BookmarkScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    resourceId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => EnumBookmarkTypeFilterObjectSchema),
        z.lazy(() => BookmarkTypeSchema),
      ])
      .optional(),
  })
  .strict();

export const BookmarkScalarWhereInputObjectSchema = Schema;
