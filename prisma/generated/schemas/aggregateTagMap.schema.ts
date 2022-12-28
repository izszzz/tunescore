import { z } from 'zod';
import { TagMapWhereInputObjectSchema } from './objects/TagMapWhereInput.schema';
import { TagMapOrderByWithRelationInputObjectSchema } from './objects/TagMapOrderByWithRelationInput.schema';
import { TagMapWhereUniqueInputObjectSchema } from './objects/TagMapWhereUniqueInput.schema';
import { TagMapCountAggregateInputObjectSchema } from './objects/TagMapCountAggregateInput.schema';
import { TagMapMinAggregateInputObjectSchema } from './objects/TagMapMinAggregateInput.schema';
import { TagMapMaxAggregateInputObjectSchema } from './objects/TagMapMaxAggregateInput.schema';

export const TagMapAggregateSchema = z.object({
  where: TagMapWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TagMapOrderByWithRelationInputObjectSchema,
      TagMapOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: TagMapWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TagMapCountAggregateInputObjectSchema])
    .optional(),
  _min: TagMapMinAggregateInputObjectSchema.optional(),
  _max: TagMapMaxAggregateInputObjectSchema.optional(),
});
