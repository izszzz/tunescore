import { z } from 'zod';
import { ResourceTypeSchema } from '../enums/ResourceType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkResourceIdResourceTypeUserIdCompoundUniqueInput> =
  z
    .object({
      resourceId: z.string(),
      resourceType: z.lazy(() => ResourceTypeSchema),
      userId: z.string(),
    })
    .strict();

export const BookmarkResourceIdResourceTypeUserIdCompoundUniqueInputObjectSchema =
  Schema;
