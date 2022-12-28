import { z } from 'zod';
import { TagSelectObjectSchema } from './objects/TagSelect.schema';
import { TagIncludeObjectSchema } from './objects/TagInclude.schema';
import { TagWhereUniqueInputObjectSchema } from './objects/TagWhereUniqueInput.schema';
import { TagCreateInputObjectSchema } from './objects/TagCreateInput.schema';
import { TagUpdateInputObjectSchema } from './objects/TagUpdateInput.schema';

export const TagUpsertSchema = z.object({
  select: TagSelectObjectSchema.optional(),
  include: TagIncludeObjectSchema.optional(),
  where: TagWhereUniqueInputObjectSchema,
  create: TagCreateInputObjectSchema,
  update: TagUpdateInputObjectSchema,
});
