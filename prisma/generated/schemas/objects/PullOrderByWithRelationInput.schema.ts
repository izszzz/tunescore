import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PullScoreOrderByInputObjectSchema } from './PullScoreOrderByInput.schema';
import { MusicOrderByWithRelationInputObjectSchema } from './MusicOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    body: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => PullScoreOrderByInputObjectSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    music: z.lazy(() => MusicOrderByWithRelationInputObjectSchema).optional(),
    musicId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PullOrderByWithRelationInputObjectSchema = Schema;
