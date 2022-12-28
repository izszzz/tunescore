import { z } from 'zod';
import { TagMapSelectObjectSchema } from './objects/TagMapSelect.schema';
import { TagMapIncludeObjectSchema } from './objects/TagMapInclude.schema';
import { TagMapCreateInputObjectSchema } from './objects/TagMapCreateInput.schema';

export const TagMapCreateOneSchema = z.object({
  select: TagMapSelectObjectSchema.optional(),
  include: TagMapIncludeObjectSchema.optional(),
  data: TagMapCreateInputObjectSchema,
});
