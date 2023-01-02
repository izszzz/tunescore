import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    artistId: z.lazy(() => SortOrderSchema).optional(),
    musicId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ParticipationCountOrderByAggregateInputObjectSchema = Schema;
