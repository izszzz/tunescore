import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ParticipationCountOrderByAggregateInputObjectSchema } from './ParticipationCountOrderByAggregateInput.schema';
import { ParticipationMaxOrderByAggregateInputObjectSchema } from './ParticipationMaxOrderByAggregateInput.schema';
import { ParticipationMinOrderByAggregateInputObjectSchema } from './ParticipationMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    artistId: z.lazy(() => SortOrderSchema).optional(),
    musicId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ParticipationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ParticipationMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ParticipationMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ParticipationOrderByWithAggregationInputObjectSchema = Schema;
