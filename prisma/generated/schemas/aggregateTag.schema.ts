import { z } from 'zod';
import { TagWhereInputObjectSchema } from './objects/TagWhereInput.schema';
import { TagOrderByWithRelationInputObjectSchema } from './objects/TagOrderByWithRelationInput.schema';
import { TagWhereUniqueInputObjectSchema } from './objects/TagWhereUniqueInput.schema';
import { TagCountAggregateInputObjectSchema } from './objects/TagCountAggregateInput.schema';
import { TagMinAggregateInputObjectSchema } from './objects/TagMinAggregateInput.schema';
import { TagMaxAggregateInputObjectSchema } from './objects/TagMaxAggregateInput.schema';

export const TagAggregateSchema = z.object({
  where: TagWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TagOrderByWithRelationInputObjectSchema,
      TagOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: TagWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TagCountAggregateInputObjectSchema])
    .optional(),
  _min: TagMinAggregateInputObjectSchema.optional(),
  _max: TagMaxAggregateInputObjectSchema.optional(),
});
