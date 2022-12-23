import { z } from 'zod';
import { NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';
import { NotificationOrderByWithRelationInputObjectSchema } from './objects/NotificationOrderByWithRelationInput.schema';
import { NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';
import { NotificationCountAggregateInputObjectSchema } from './objects/NotificationCountAggregateInput.schema';
import { NotificationMinAggregateInputObjectSchema } from './objects/NotificationMinAggregateInput.schema';
import { NotificationMaxAggregateInputObjectSchema } from './objects/NotificationMaxAggregateInput.schema';
import { NotificationAvgAggregateInputObjectSchema } from './objects/NotificationAvgAggregateInput.schema';
import { NotificationSumAggregateInputObjectSchema } from './objects/NotificationSumAggregateInput.schema';

export const NotificationAggregateSchema = z.object({
  where: NotificationWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      NotificationOrderByWithRelationInputObjectSchema,
      NotificationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: NotificationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), NotificationCountAggregateInputObjectSchema])
    .optional(),
  _min: NotificationMinAggregateInputObjectSchema.optional(),
  _max: NotificationMaxAggregateInputObjectSchema.optional(),
  _avg: NotificationAvgAggregateInputObjectSchema.optional(),
  _sum: NotificationSumAggregateInputObjectSchema.optional(),
});
