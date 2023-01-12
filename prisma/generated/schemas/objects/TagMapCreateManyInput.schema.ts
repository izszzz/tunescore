import { z } from 'zod';
import { ResourceTypeSchema } from '../enums/ResourceType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCreateManyInput> = z
  .object({
    id: z.string().optional(),
    tagId: z.string(),
    resourceId: z.string(),
    resourceType: z.lazy(() => ResourceTypeSchema),
  })
  .strict();

export const TagMapCreateManyInputObjectSchema = Schema;
