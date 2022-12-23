import { z } from 'zod';
import { CommentCreateManyInputObjectSchema } from './objects/CommentCreateManyInput.schema';

export const CommentCreateManySchema = z.object({
  data: CommentCreateManyInputObjectSchema,
});
