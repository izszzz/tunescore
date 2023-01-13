import { z } from 'zod';
import { TagMapSelectObjectSchema } from './objects/TagMapSelect.schema';
import { TagMapIncludeObjectSchema } from './objects/TagMapInclude.schema';
import { TagMapOrderByWithRelationInputObjectSchema } from './objects/TagMapOrderByWithRelationInput.schema';
import { TagMapWhereInputObjectSchema } from './objects/TagMapWhereInput.schema';
import { TagMapWhereUniqueInputObjectSchema } from './objects/TagMapWhereUniqueInput.schema';
import { TagMapScalarFieldEnumSchema } from './enums/TagMapScalarFieldEnum.schema';

export const TagMapFindManySchema = z.object({
  select: z.lazy(() => TagMapSelectObjectSchema.optional()),
  include: z.lazy(() => TagMapIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      TagMapOrderByWithRelationInputObjectSchema,
      TagMapOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TagMapWhereInputObjectSchema.optional(),
  cursor: TagMapWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TagMapScalarFieldEnumSchema).optional(),
});
