import { z } from 'zod';
import { TagMapSelectObjectSchema } from './objects/TagMapSelect.schema';
import { TagMapIncludeObjectSchema } from './objects/TagMapInclude.schema';
import { TagMapWhereUniqueInputObjectSchema } from './objects/TagMapWhereUniqueInput.schema';
import { TagMapCreateInputObjectSchema } from './objects/TagMapCreateInput.schema';
import { TagMapUpdateInputObjectSchema } from './objects/TagMapUpdateInput.schema';

export const TagMapUpsertSchema = z.object({
  select: TagMapSelectObjectSchema.optional(),
  include: TagMapIncludeObjectSchema.optional(),
  where: TagMapWhereUniqueInputObjectSchema,
  create: TagMapCreateInputObjectSchema,
  update: TagMapUpdateInputObjectSchema,
});
