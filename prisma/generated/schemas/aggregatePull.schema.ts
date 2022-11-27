import { z } from 'zod';
import { PullWhereInputObjectSchema } from './objects/PullWhereInput.schema';
import { PullOrderByWithRelationInputObjectSchema } from './objects/PullOrderByWithRelationInput.schema';
import { PullWhereUniqueInputObjectSchema } from './objects/PullWhereUniqueInput.schema';
import { PullCountAggregateInputObjectSchema } from './objects/PullCountAggregateInput.schema';
import { PullMinAggregateInputObjectSchema } from './objects/PullMinAggregateInput.schema';
import { PullMaxAggregateInputObjectSchema } from './objects/PullMaxAggregateInput.schema';

export const PullAggregateSchema = z.object({
  where: PullWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PullOrderByWithRelationInputObjectSchema,
      PullOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: PullWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PullCountAggregateInputObjectSchema])
    .optional(),
  _min: PullMinAggregateInputObjectSchema.optional(),
  _max: PullMaxAggregateInputObjectSchema.optional(),
});
