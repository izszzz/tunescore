import { z } from 'zod';
import { PointOrderByWithRelationInputObjectSchema } from './objects/PointOrderByWithRelationInput.schema';
import { PointWhereInputObjectSchema } from './objects/PointWhereInput.schema';
import { PointWhereUniqueInputObjectSchema } from './objects/PointWhereUniqueInput.schema';
import { PointCountAggregateInputObjectSchema } from './objects/PointCountAggregateInput.schema';
import { PointMinAggregateInputObjectSchema } from './objects/PointMinAggregateInput.schema';
import { PointMaxAggregateInputObjectSchema } from './objects/PointMaxAggregateInput.schema';
import { PointAvgAggregateInputObjectSchema } from './objects/PointAvgAggregateInput.schema';
import { PointSumAggregateInputObjectSchema } from './objects/PointSumAggregateInput.schema';

export const PointAggregateSchema = z.object({
  orderBy: z
    .union([
      PointOrderByWithRelationInputObjectSchema,
      PointOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PointWhereInputObjectSchema.optional(),
  cursor: PointWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PointCountAggregateInputObjectSchema])
    .optional(),
  _min: PointMinAggregateInputObjectSchema.optional(),
  _max: PointMaxAggregateInputObjectSchema.optional(),
  _avg: PointAvgAggregateInputObjectSchema.optional(),
  _sum: PointSumAggregateInputObjectSchema.optional(),
});
