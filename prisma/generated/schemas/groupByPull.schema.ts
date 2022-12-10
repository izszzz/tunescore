import { z } from 'zod';
import { PullWhereInputObjectSchema } from './objects/PullWhereInput.schema';
import { PullOrderByWithAggregationInputObjectSchema } from './objects/PullOrderByWithAggregationInput.schema';
import { PullScalarWhereWithAggregatesInputObjectSchema } from './objects/PullScalarWhereWithAggregatesInput.schema';
import { PullScalarFieldEnumSchema } from './enums/PullScalarFieldEnum.schema';

export const PullGroupBySchema = z.object({
  where: PullWhereInputObjectSchema.optional(),
  orderBy: z.union([
    PullOrderByWithAggregationInputObjectSchema,
    PullOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: PullScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PullScalarFieldEnumSchema),
});
