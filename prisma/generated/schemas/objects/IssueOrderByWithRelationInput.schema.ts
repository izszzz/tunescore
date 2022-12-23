import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CommentOrderByRelationAggregateInputObjectSchema } from './CommentOrderByRelationAggregateInput.schema';
import { MusicOrderByWithRelationInputObjectSchema } from './MusicOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    body: z.lazy(() => SortOrderSchema).optional(),
    comments: z
      .lazy(() => CommentOrderByRelationAggregateInputObjectSchema)
      .optional(),
    music: z.lazy(() => MusicOrderByWithRelationInputObjectSchema).optional(),
    musicId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const IssueOrderByWithRelationInputObjectSchema = Schema;
