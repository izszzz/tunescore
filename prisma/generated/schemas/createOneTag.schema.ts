import { z } from 'zod';
import { TagSelectObjectSchema } from './objects/TagSelect.schema';
import { TagIncludeObjectSchema } from './objects/TagInclude.schema';
import { TagCreateInputObjectSchema } from './objects/TagCreateInput.schema';

export const TagCreateOneSchema = z.object({
  select: TagSelectObjectSchema.optional(),
  include: TagIncludeObjectSchema.optional(),
  data: TagCreateInputObjectSchema,
});
