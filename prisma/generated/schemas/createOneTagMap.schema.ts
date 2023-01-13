import { z } from 'zod';
import { TagMapSelectObjectSchema } from './objects/TagMapSelect.schema';
import { TagMapIncludeObjectSchema } from './objects/TagMapInclude.schema';
import { TagMapCreateInputObjectSchema } from './objects/TagMapCreateInput.schema';
import { TagMapUncheckedCreateInputObjectSchema } from './objects/TagMapUncheckedCreateInput.schema';

export const TagMapCreateOneSchema = z.object({
  select: TagMapSelectObjectSchema.optional(),
  include: TagMapIncludeObjectSchema.optional(),
  data: z.union([
    TagMapCreateInputObjectSchema,
    TagMapUncheckedCreateInputObjectSchema,
  ]),
});
