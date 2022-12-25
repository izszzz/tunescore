import { z } from 'zod';
import { FollowWhereInputObjectSchema } from './objects/FollowWhereInput.schema';
import { FollowOrderByWithRelationInputObjectSchema } from './objects/FollowOrderByWithRelationInput.schema';
import { FollowWhereUniqueInputObjectSchema } from './objects/FollowWhereUniqueInput.schema';
import { FollowCountAggregateInputObjectSchema } from './objects/FollowCountAggregateInput.schema';
import { FollowMinAggregateInputObjectSchema } from './objects/FollowMinAggregateInput.schema';
import { FollowMaxAggregateInputObjectSchema } from './objects/FollowMaxAggregateInput.schema';

export const FollowAggregateSchema = z.object({
  where: FollowWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      FollowOrderByWithRelationInputObjectSchema,
      FollowOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: FollowWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), FollowCountAggregateInputObjectSchema])
    .optional(),
  _min: FollowMinAggregateInputObjectSchema.optional(),
  _max: FollowMaxAggregateInputObjectSchema.optional(),
});
