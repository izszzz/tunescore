import { z } from 'zod';
import { BookmarkSelectObjectSchema } from './objects/BookmarkSelect.schema';
import { BookmarkIncludeObjectSchema } from './objects/BookmarkInclude.schema';
import { BookmarkWhereUniqueInputObjectSchema } from './objects/BookmarkWhereUniqueInput.schema';
import { BookmarkCreateInputObjectSchema } from './objects/BookmarkCreateInput.schema';
import { BookmarkUpdateInputObjectSchema } from './objects/BookmarkUpdateInput.schema';

export const BookmarkUpsertSchema = z.object({
  select: BookmarkSelectObjectSchema.optional(),
  include: BookmarkIncludeObjectSchema.optional(),
  where: BookmarkWhereUniqueInputObjectSchema,
  create: BookmarkCreateInputObjectSchema,
  update: BookmarkUpdateInputObjectSchema,
});
