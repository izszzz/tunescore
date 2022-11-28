import { z } from 'zod';
import { MusicCountOutputTypeSelectObjectSchema } from './MusicCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => MusicCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const MusicCountOutputTypeArgsObjectSchema = Schema;
