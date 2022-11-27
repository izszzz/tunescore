import { z } from 'zod';
import { MusicWhereInputObjectSchema } from './MusicWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicListRelationFilter> = z
  .object({
    every: z.lazy(() => MusicWhereInputObjectSchema).optional(),
    some: z.lazy(() => MusicWhereInputObjectSchema).optional(),
    none: z.lazy(() => MusicWhereInputObjectSchema).optional(),
  })
  .strict();

export const MusicListRelationFilterObjectSchema = Schema;
