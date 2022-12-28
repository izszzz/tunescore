import { z } from 'zod';
import { TagMapSelectObjectSchema } from './objects/TagMapSelect.schema';
import { TagMapIncludeObjectSchema } from './objects/TagMapInclude.schema';
import { TagMapWhereUniqueInputObjectSchema } from './objects/TagMapWhereUniqueInput.schema';

export const TagMapFindUniqueSchema = z.object({
  select: TagMapSelectObjectSchema.optional(),
  include: TagMapIncludeObjectSchema.optional(),
  where: TagMapWhereUniqueInputObjectSchema,
});
