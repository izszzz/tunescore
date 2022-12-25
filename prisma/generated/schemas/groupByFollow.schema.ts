import { z } from 'zod';
import { FollowWhereInputObjectSchema } from './objects/FollowWhereInput.schema';
import { FollowOrderByWithAggregationInputObjectSchema } from './objects/FollowOrderByWithAggregationInput.schema';
import { FollowScalarWhereWithAggregatesInputObjectSchema } from './objects/FollowScalarWhereWithAggregatesInput.schema';
import { FollowScalarFieldEnumSchema } from './enums/FollowScalarFieldEnum.schema';

export const FollowGroupBySchema = z.object({
  where: FollowWhereInputObjectSchema.optional(),
  orderBy: z.union([
    FollowOrderByWithAggregationInputObjectSchema,
    FollowOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: FollowScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(FollowScalarFieldEnumSchema),
});
