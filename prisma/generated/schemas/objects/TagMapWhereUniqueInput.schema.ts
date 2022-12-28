import { z } from 'zod';
import { TagMapResourceIdTagIdResourceTypeCompoundUniqueInputObjectSchema } from './TagMapResourceIdTagIdResourceTypeCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    resourceId_tagId_resourceType: z
      .lazy(
        () => TagMapResourceIdTagIdResourceTypeCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TagMapWhereUniqueInputObjectSchema = Schema;
