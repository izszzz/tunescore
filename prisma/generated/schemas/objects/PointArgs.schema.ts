import { z } from 'zod';
import { PointSelectObjectSchema } from './PointSelect.schema';
import { PointIncludeObjectSchema } from './PointInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointArgs> = z
  .object({
    select: z.lazy(() => PointSelectObjectSchema).optional(),
    include: z.lazy(() => PointIncludeObjectSchema).optional(),
  })
  .strict();

export const PointArgsObjectSchema = Schema;
