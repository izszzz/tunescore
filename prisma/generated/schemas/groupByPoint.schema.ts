import { z } from 'zod';
import { PointWhereInputObjectSchema } from './objects/PointWhereInput.schema';
import { PointOrderByWithAggregationInputObjectSchema } from './objects/PointOrderByWithAggregationInput.schema';
import { PointScalarWhereWithAggregatesInputObjectSchema } from './objects/PointScalarWhereWithAggregatesInput.schema';
import { PointScalarFieldEnumSchema } from './enums/PointScalarFieldEnum.schema';

export const PointGroupBySchema = z.object({
  where: PointWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PointOrderByWithAggregationInputObjectSchema,
      PointOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PointScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PointScalarFieldEnumSchema),
});
