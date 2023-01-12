import { z } from 'zod';
import { PullOrderByWithRelationInputObjectSchema } from './objects/PullOrderByWithRelationInput.schema';
import { PullWhereInputObjectSchema } from './objects/PullWhereInput.schema';
import { PullWhereUniqueInputObjectSchema } from './objects/PullWhereUniqueInput.schema';
import { PullCountAggregateInputObjectSchema } from './objects/PullCountAggregateInput.schema';
import { PullMinAggregateInputObjectSchema } from './objects/PullMinAggregateInput.schema';
import { PullMaxAggregateInputObjectSchema } from './objects/PullMaxAggregateInput.schema';

export const PullAggregateSchema = z.object({
  orderBy: z
    .union([
      PullOrderByWithRelationInputObjectSchema,
      PullOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PullWhereInputObjectSchema.optional(),
  cursor: PullWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PullCountAggregateInputObjectSchema])
    .optional(),
  _min: PullMinAggregateInputObjectSchema.optional(),
  _max: PullMaxAggregateInputObjectSchema.optional(),
});
