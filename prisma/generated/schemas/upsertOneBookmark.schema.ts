import { z } from 'zod';
import { BookmarkSelectObjectSchema } from './objects/BookmarkSelect.schema';
import { BookmarkIncludeObjectSchema } from './objects/BookmarkInclude.schema';
import { BookmarkWhereUniqueInputObjectSchema } from './objects/BookmarkWhereUniqueInput.schema';
import { BookmarkCreateInputObjectSchema } from './objects/BookmarkCreateInput.schema';
import { BookmarkUncheckedCreateInputObjectSchema } from './objects/BookmarkUncheckedCreateInput.schema';
import { BookmarkUpdateInputObjectSchema } from './objects/BookmarkUpdateInput.schema';
import { BookmarkUncheckedUpdateInputObjectSchema } from './objects/BookmarkUncheckedUpdateInput.schema';

export const BookmarkUpsertSchema = z.object({
  select: BookmarkSelectObjectSchema.optional(),
  include: BookmarkIncludeObjectSchema.optional(),
  where: BookmarkWhereUniqueInputObjectSchema,
  create: z.union([
    BookmarkCreateInputObjectSchema,
    BookmarkUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    BookmarkUpdateInputObjectSchema,
    BookmarkUncheckedUpdateInputObjectSchema,
  ]),
});
