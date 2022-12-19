import { z } from 'zod';
import { NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';
import { NotificationOrderByWithAggregationInputObjectSchema } from './objects/NotificationOrderByWithAggregationInput.schema';
import { NotificationScalarWhereWithAggregatesInputObjectSchema } from './objects/NotificationScalarWhereWithAggregatesInput.schema';
import { NotificationScalarFieldEnumSchema } from './enums/NotificationScalarFieldEnum.schema';

export const NotificationGroupBySchema = z.object({
  where: NotificationWhereInputObjectSchema.optional(),
  orderBy: z.union([
    NotificationOrderByWithAggregationInputObjectSchema,
    NotificationOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: NotificationScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(NotificationScalarFieldEnumSchema),
});
