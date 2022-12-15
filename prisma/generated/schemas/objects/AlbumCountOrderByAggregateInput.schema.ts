import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    bandId: z.lazy(() => SortOrderSchema).optional(),
    musicIDs: z.lazy(() => SortOrderSchema).optional(),
    artistIDs: z.lazy(() => SortOrderSchema).optional(),
    userIDs: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const AlbumCountOrderByAggregateInputObjectSchema = Schema;
