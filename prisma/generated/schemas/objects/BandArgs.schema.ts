import { z } from 'zod';
import { BandSelectObjectSchema } from './BandSelect.schema';
import { BandIncludeObjectSchema } from './BandInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandArgs> = z
  .object({
    select: z.lazy(() => BandSelectObjectSchema).optional(),
    include: z.lazy(() => BandIncludeObjectSchema).optional(),
  })
  .strict();

export const BandArgsObjectSchema = Schema;
