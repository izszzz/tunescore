import { z } from 'zod';
import { BookmarkCreateManyInputObjectSchema } from './objects/BookmarkCreateManyInput.schema';

export const BookmarkCreateManySchema = z.object({
  data: z.union([
    BookmarkCreateManyInputObjectSchema,
    z.array(BookmarkCreateManyInputObjectSchema),
  ]),
});
