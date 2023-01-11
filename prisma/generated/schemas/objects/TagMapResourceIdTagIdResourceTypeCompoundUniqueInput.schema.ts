import { z } from 'zod';
import { ResourceTypeSchema } from '../enums/ResourceType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapResourceIdTagIdResourceTypeCompoundUniqueInput> =
  z
    .object({
      resourceId: z.string(),
      tagId: z.string(),
      resourceType: z.lazy(() => ResourceTypeSchema),
    })
    .strict();

export const TagMapResourceIdTagIdResourceTypeCompoundUniqueInputObjectSchema =
  Schema;
