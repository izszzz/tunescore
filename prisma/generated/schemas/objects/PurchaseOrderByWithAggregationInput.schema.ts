import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PurchaseCountOrderByAggregateInputObjectSchema } from './PurchaseCountOrderByAggregateInput.schema';
import { PurchaseMaxOrderByAggregateInputObjectSchema } from './PurchaseMaxOrderByAggregateInput.schema';
import { PurchaseMinOrderByAggregateInputObjectSchema } from './PurchaseMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    stripePaymentIntentId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    musicId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PurchaseCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => PurchaseMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PurchaseMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const PurchaseOrderByWithAggregationInputObjectSchema = Schema;
