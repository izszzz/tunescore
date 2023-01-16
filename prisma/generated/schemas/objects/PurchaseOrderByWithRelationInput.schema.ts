import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { MusicOrderByWithRelationInputObjectSchema } from './MusicOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    music: z.lazy(() => MusicOrderByWithRelationInputObjectSchema).optional(),
    musicId: z.lazy(() => SortOrderSchema).optional(),
    stripePaymentIntentId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PurchaseOrderByWithRelationInputObjectSchema = Schema;
