import { z } from 'zod';
import { TagTypeSchema } from '../enums/TagType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapResourceIdTagIdResourceTypeCompoundUniqueInput> =
  z
    .object({
      resourceId: z.string(),
      tagId: z.string(),
      resourceType: z.lazy(() => TagTypeSchema),
    })
    .strict();

export const TagMapResourceIdTagIdResourceTypeCompoundUniqueInputObjectSchema =
  Schema;
