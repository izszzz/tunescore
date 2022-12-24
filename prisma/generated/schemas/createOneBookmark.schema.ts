import { z } from 'zod';
import { BookmarkSelectObjectSchema } from './objects/BookmarkSelect.schema';
import { BookmarkIncludeObjectSchema } from './objects/BookmarkInclude.schema';
import { BookmarkCreateInputObjectSchema } from './objects/BookmarkCreateInput.schema';

export const BookmarkCreateOneSchema = z.object({
  select: BookmarkSelectObjectSchema.optional(),
  include: BookmarkIncludeObjectSchema.optional(),
  data: BookmarkCreateInputObjectSchema,
});
