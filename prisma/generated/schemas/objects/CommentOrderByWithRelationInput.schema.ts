import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PullOrderByWithRelationInputObjectSchema } from './PullOrderByWithRelationInput.schema';
import { IssueOrderByWithRelationInputObjectSchema } from './IssueOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    body: z.lazy(() => SortOrderSchema).optional(),
    pull: z.lazy(() => PullOrderByWithRelationInputObjectSchema).optional(),
    issue: z.lazy(() => IssueOrderByWithRelationInputObjectSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    resourceId: z.lazy(() => SortOrderSchema).optional(),
    resourceType: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const CommentOrderByWithRelationInputObjectSchema = Schema;
