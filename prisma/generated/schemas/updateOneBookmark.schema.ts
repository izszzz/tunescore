import { z } from 'zod';
import { BookmarkSelectObjectSchema } from './objects/BookmarkSelect.schema';
import { BookmarkIncludeObjectSchema } from './objects/BookmarkInclude.schema';
import { BookmarkUpdateInputObjectSchema } from './objects/BookmarkUpdateInput.schema';
import { BookmarkUncheckedUpdateInputObjectSchema } from './objects/BookmarkUncheckedUpdateInput.schema';
import { BookmarkWhereUniqueInputObjectSchema } from './objects/BookmarkWhereUniqueInput.schema';

export const BookmarkUpdateOneSchema = z.object({
  select: BookmarkSelectObjectSchema.optional(),
  include: BookmarkIncludeObjectSchema.optional(),
  data: z.union([
    BookmarkUpdateInputObjectSchema,
    BookmarkUncheckedUpdateInputObjectSchema,
  ]),
  where: BookmarkWhereUniqueInputObjectSchema,
});
