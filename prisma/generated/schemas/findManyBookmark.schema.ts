import { z } from 'zod';
import { BookmarkSelectObjectSchema } from './objects/BookmarkSelect.schema';
import { BookmarkIncludeObjectSchema } from './objects/BookmarkInclude.schema';
import { BookmarkWhereInputObjectSchema } from './objects/BookmarkWhereInput.schema';
import { BookmarkOrderByWithRelationInputObjectSchema } from './objects/BookmarkOrderByWithRelationInput.schema';
import { BookmarkWhereUniqueInputObjectSchema } from './objects/BookmarkWhereUniqueInput.schema';
import { BookmarkScalarFieldEnumSchema } from './enums/BookmarkScalarFieldEnum.schema';

export const BookmarkFindManySchema = z.object({
  select: z.lazy(() => BookmarkSelectObjectSchema.optional()),
  include: z.lazy(() => BookmarkIncludeObjectSchema.optional()),
  where: BookmarkWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      BookmarkOrderByWithRelationInputObjectSchema,
      BookmarkOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: BookmarkWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BookmarkScalarFieldEnumSchema).optional(),
});