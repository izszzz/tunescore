import { z } from 'zod';
import { BookmarkTypeSchema } from '../enums/BookmarkType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkResourceIdResourceTypeUserIdCompoundUniqueInput> =
  z
    .object({
      resourceId: z.string(),
      resourceType: z.lazy(() => BookmarkTypeSchema),
      userId: z.string(),
    })
    .strict();

export const BookmarkResourceIdResourceTypeUserIdCompoundUniqueInputObjectSchema =
  Schema;
