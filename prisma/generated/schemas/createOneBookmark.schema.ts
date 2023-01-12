import { z } from 'zod';
import { BookmarkSelectObjectSchema } from './objects/BookmarkSelect.schema';
import { BookmarkIncludeObjectSchema } from './objects/BookmarkInclude.schema';
import { BookmarkCreateInputObjectSchema } from './objects/BookmarkCreateInput.schema';
import { BookmarkUncheckedCreateInputObjectSchema } from './objects/BookmarkUncheckedCreateInput.schema';

export const BookmarkCreateOneSchema = z.object({
  select: BookmarkSelectObjectSchema.optional(),
  include: BookmarkIncludeObjectSchema.optional(),
  data: z.union([
    BookmarkCreateInputObjectSchema,
    BookmarkUncheckedCreateInputObjectSchema,
  ]),
});
