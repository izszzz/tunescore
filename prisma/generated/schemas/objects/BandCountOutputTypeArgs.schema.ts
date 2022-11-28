import { z } from 'zod';
import { BandCountOutputTypeSelectObjectSchema } from './BandCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => BandCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const BandCountOutputTypeArgsObjectSchema = Schema;
