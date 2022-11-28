import { z } from 'zod';
import { MusicSelectObjectSchema } from './MusicSelect.schema';
import { MusicIncludeObjectSchema } from './MusicInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicArgs> = z
  .object({
    select: z.lazy(() => MusicSelectObjectSchema).optional(),
    include: z.lazy(() => MusicIncludeObjectSchema).optional(),
  })
  .strict();

export const MusicArgsObjectSchema = Schema;
