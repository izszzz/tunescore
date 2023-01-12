import { z } from 'zod';
import { TagMapWhereInputObjectSchema } from './objects/TagMapWhereInput.schema';
import { TagMapOrderByWithAggregationInputObjectSchema } from './objects/TagMapOrderByWithAggregationInput.schema';
import { TagMapScalarWhereWithAggregatesInputObjectSchema } from './objects/TagMapScalarWhereWithAggregatesInput.schema';
import { TagMapScalarFieldEnumSchema } from './enums/TagMapScalarFieldEnum.schema';

export const TagMapGroupBySchema = z.object({
  where: TagMapWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TagMapOrderByWithAggregationInputObjectSchema,
      TagMapOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TagMapScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TagMapScalarFieldEnumSchema),
});
