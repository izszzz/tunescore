import { z } from 'zod';
import { PurchaseOrderByWithRelationInputObjectSchema } from './objects/PurchaseOrderByWithRelationInput.schema';
import { PurchaseWhereInputObjectSchema } from './objects/PurchaseWhereInput.schema';
import { PurchaseWhereUniqueInputObjectSchema } from './objects/PurchaseWhereUniqueInput.schema';
import { PurchaseCountAggregateInputObjectSchema } from './objects/PurchaseCountAggregateInput.schema';
import { PurchaseMinAggregateInputObjectSchema } from './objects/PurchaseMinAggregateInput.schema';
import { PurchaseMaxAggregateInputObjectSchema } from './objects/PurchaseMaxAggregateInput.schema';

export const PurchaseAggregateSchema = z.object({
  orderBy: z
    .union([
      PurchaseOrderByWithRelationInputObjectSchema,
      PurchaseOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PurchaseWhereInputObjectSchema.optional(),
  cursor: PurchaseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PurchaseCountAggregateInputObjectSchema])
    .optional(),
  _min: PurchaseMinAggregateInputObjectSchema.optional(),
  _max: PurchaseMaxAggregateInputObjectSchema.optional(),
});
