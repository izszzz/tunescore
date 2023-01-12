import { z } from 'zod';
import { TagMapSelectObjectSchema } from './objects/TagMapSelect.schema';
import { TagMapIncludeObjectSchema } from './objects/TagMapInclude.schema';
import { TagMapWhereUniqueInputObjectSchema } from './objects/TagMapWhereUniqueInput.schema';
import { TagMapCreateInputObjectSchema } from './objects/TagMapCreateInput.schema';
import { TagMapUncheckedCreateInputObjectSchema } from './objects/TagMapUncheckedCreateInput.schema';
import { TagMapUpdateInputObjectSchema } from './objects/TagMapUpdateInput.schema';
import { TagMapUncheckedUpdateInputObjectSchema } from './objects/TagMapUncheckedUpdateInput.schema';

export const TagMapUpsertSchema = z.object({
  select: TagMapSelectObjectSchema.optional(),
  include: TagMapIncludeObjectSchema.optional(),
  where: TagMapWhereUniqueInputObjectSchema,
  create: z.union([
    TagMapCreateInputObjectSchema,
    TagMapUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TagMapUpdateInputObjectSchema,
    TagMapUncheckedUpdateInputObjectSchema,
  ]),
});
