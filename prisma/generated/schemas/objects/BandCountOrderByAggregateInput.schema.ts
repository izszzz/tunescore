import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    artistIDs: z.lazy(() => SortOrderSchema).optional(),
    userIDs: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const BandCountOrderByAggregateInputObjectSchema = Schema;
