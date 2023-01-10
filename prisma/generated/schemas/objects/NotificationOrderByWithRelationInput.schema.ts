import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BookmarkOrderByWithRelationInputObjectSchema } from './BookmarkOrderByWithRelationInput.schema';
import { FollowOrderByWithRelationInputObjectSchema } from './FollowOrderByWithRelationInput.schema';
import { CommentOrderByWithRelationInputObjectSchema } from './CommentOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    bookmarked: z
      .lazy(() => BookmarkOrderByWithRelationInputObjectSchema)
      .optional(),
    followed: z
      .lazy(() => FollowOrderByWithRelationInputObjectSchema)
      .optional(),
    commented: z
      .lazy(() => CommentOrderByWithRelationInputObjectSchema)
      .optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    resourceId: z.lazy(() => SortOrderSchema).optional(),
    resourceType: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    readAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const NotificationOrderByWithRelationInputObjectSchema = Schema;
