import { z } from 'zod';
import { TagTypeSchema } from '../enums/TagType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUncheckedCreateWithoutTagInput> = z
  .object({
    id: z.string().optional(),
    resourceId: z.string(),
    resourceType: z.lazy(() => TagTypeSchema),
  })
  .strict();

export const TagMapUncheckedCreateWithoutTagInputObjectSchema = Schema;
