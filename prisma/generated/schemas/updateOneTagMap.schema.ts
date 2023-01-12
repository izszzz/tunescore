import { z } from 'zod';
import { TagMapSelectObjectSchema } from './objects/TagMapSelect.schema';
import { TagMapIncludeObjectSchema } from './objects/TagMapInclude.schema';
import { TagMapUpdateInputObjectSchema } from './objects/TagMapUpdateInput.schema';
import { TagMapUncheckedUpdateInputObjectSchema } from './objects/TagMapUncheckedUpdateInput.schema';
import { TagMapWhereUniqueInputObjectSchema } from './objects/TagMapWhereUniqueInput.schema';

export const TagMapUpdateOneSchema = z.object({
  select: TagMapSelectObjectSchema.optional(),
  include: TagMapIncludeObjectSchema.optional(),
  data: z.union([
    TagMapUpdateInputObjectSchema,
    TagMapUncheckedUpdateInputObjectSchema,
  ]),
  where: TagMapWhereUniqueInputObjectSchema,
});
