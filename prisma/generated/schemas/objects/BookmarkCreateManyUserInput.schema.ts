import { z } from 'zod';
import { ResourceTypeSchema } from '../enums/ResourceType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    resourceId: z.string(),
    resourceType: z.lazy(() => ResourceTypeSchema),
  })
  .strict();

export const BookmarkCreateManyUserInputObjectSchema = Schema;
