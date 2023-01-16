import { z } from 'zod';
import { PurchaseWhereInputObjectSchema } from './PurchaseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseListRelationFilter> = z
  .object({
    every: z.lazy(() => PurchaseWhereInputObjectSchema).optional(),
    some: z.lazy(() => PurchaseWhereInputObjectSchema).optional(),
    none: z.lazy(() => PurchaseWhereInputObjectSchema).optional(),
  })
  .strict();

export const PurchaseListRelationFilterObjectSchema = Schema;
