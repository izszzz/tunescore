import { z } from 'zod';
import { CommentSelectObjectSchema } from './objects/CommentSelect.schema';
import { CommentIncludeObjectSchema } from './objects/CommentInclude.schema';
import { CommentWhereUniqueInputObjectSchema } from './objects/CommentWhereUniqueInput.schema';
import { CommentCreateInputObjectSchema } from './objects/CommentCreateInput.schema';
import { CommentUpdateInputObjectSchema } from './objects/CommentUpdateInput.schema';

export const CommentUpsertSchema = z.object({
  select: CommentSelectObjectSchema.optional(),
  include: CommentIncludeObjectSchema.optional(),
  where: CommentWhereUniqueInputObjectSchema,
  create: CommentCreateInputObjectSchema,
  update: CommentUpdateInputObjectSchema,
});
