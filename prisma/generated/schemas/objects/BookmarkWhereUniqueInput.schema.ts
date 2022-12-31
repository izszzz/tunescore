import { z } from 'zod';
import { BookmarkResourceIdResourceTypeUserIdCompoundUniqueInputObjectSchema } from './BookmarkResourceIdResourceTypeUserIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    resourceId_resourceType_userId: z
      .lazy(
        () =>
          BookmarkResourceIdResourceTypeUserIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BookmarkWhereUniqueInputObjectSchema = Schema;
