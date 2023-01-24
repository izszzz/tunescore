import { z } from 'zod';
import { PurchaseWhereInputObjectSchema } from './objects/PurchaseWhereInput.schema';
import { PurchaseOrderByWithAggregationInputObjectSchema } from './objects/PurchaseOrderByWithAggregationInput.schema';
import { PurchaseScalarWhereWithAggregatesInputObjectSchema } from './objects/PurchaseScalarWhereWithAggregatesInput.schema';
import { PurchaseScalarFieldEnumSchema } from './enums/PurchaseScalarFieldEnum.schema';

export const PurchaseGroupBySchema = z.object({
  where: PurchaseWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PurchaseOrderByWithAggregationInputObjectSchema,
      PurchaseOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PurchaseScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PurchaseScalarFieldEnumSchema),
});
