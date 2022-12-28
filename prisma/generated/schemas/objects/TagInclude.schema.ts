import { z } from 'zod';
import { TagMapFindManySchema } from '../findManyTagMap.schema';
import { TagCountOutputTypeArgsObjectSchema } from './TagCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagInclude> = z
  .object({
    tagMap: z
      .union([z.boolean(), z.lazy(() => TagMapFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const TagIncludeObjectSchema = Schema;
