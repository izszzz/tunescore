import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    writtenMusicsIDs: z.lazy(() => SortOrderSchema).optional(),
    composedMusicsIDs: z.lazy(() => SortOrderSchema).optional(),
    musicIDs: z.lazy(() => SortOrderSchema).optional(),
    bandIDs: z.lazy(() => SortOrderSchema).optional(),
    albumIDs: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ArtistCountOrderByAggregateInputObjectSchema = Schema;
