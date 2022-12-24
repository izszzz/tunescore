import { z } from 'zod';
import { BookmarkSelectObjectSchema } from './objects/BookmarkSelect.schema';
import { BookmarkIncludeObjectSchema } from './objects/BookmarkInclude.schema';
import { BookmarkUpdateInputObjectSchema } from './objects/BookmarkUpdateInput.schema';
import { BookmarkWhereUniqueInputObjectSchema } from './objects/BookmarkWhereUniqueInput.schema';

export const BookmarkUpdateOneSchema = z.object({
  select: BookmarkSelectObjectSchema.optional(),
  include: BookmarkIncludeObjectSchema.optional(),
  data: BookmarkUpdateInputObjectSchema,
  where: BookmarkWhereUniqueInputObjectSchema,
});
