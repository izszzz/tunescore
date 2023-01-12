import { z } from 'zod';
import { VoteOrderByWithRelationInputObjectSchema } from './objects/VoteOrderByWithRelationInput.schema';
import { VoteWhereInputObjectSchema } from './objects/VoteWhereInput.schema';
import { VoteWhereUniqueInputObjectSchema } from './objects/VoteWhereUniqueInput.schema';
import { VoteCountAggregateInputObjectSchema } from './objects/VoteCountAggregateInput.schema';
import { VoteMinAggregateInputObjectSchema } from './objects/VoteMinAggregateInput.schema';
import { VoteMaxAggregateInputObjectSchema } from './objects/VoteMaxAggregateInput.schema';
import { VoteAvgAggregateInputObjectSchema } from './objects/VoteAvgAggregateInput.schema';
import { VoteSumAggregateInputObjectSchema } from './objects/VoteSumAggregateInput.schema';

export const VoteAggregateSchema = z.object({
  orderBy: z
    .union([
      VoteOrderByWithRelationInputObjectSchema,
      VoteOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: VoteWhereInputObjectSchema.optional(),
  cursor: VoteWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), VoteCountAggregateInputObjectSchema])
    .optional(),
  _min: VoteMinAggregateInputObjectSchema.optional(),
  _max: VoteMaxAggregateInputObjectSchema.optional(),
  _avg: VoteAvgAggregateInputObjectSchema.optional(),
  _sum: VoteSumAggregateInputObjectSchema.optional(),
});
