import { z } from 'zod';
import { CommentSelectObjectSchema } from './objects/CommentSelect.schema';
import { CommentIncludeObjectSchema } from './objects/CommentInclude.schema';
import { CommentCreateInputObjectSchema } from './objects/CommentCreateInput.schema';

export const CommentCreateOneSchema = z.object({
  select: CommentSelectObjectSchema.optional(),
  include: CommentIncludeObjectSchema.optional(),
  data: CommentCreateInputObjectSchema,
});
