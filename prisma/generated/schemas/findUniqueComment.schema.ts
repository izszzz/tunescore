import { z } from 'zod';
import { CommentSelectObjectSchema } from './objects/CommentSelect.schema';
import { CommentIncludeObjectSchema } from './objects/CommentInclude.schema';
import { CommentWhereUniqueInputObjectSchema } from './objects/CommentWhereUniqueInput.schema';

export const CommentFindUniqueSchema = z.object({
  select: CommentSelectObjectSchema.optional(),
  include: CommentIncludeObjectSchema.optional(),
  where: CommentWhereUniqueInputObjectSchema,
});
