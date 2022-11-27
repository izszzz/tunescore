import { z } from 'zod';
import { MusicWhereInputObjectSchema } from './MusicWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicRelationFilter> = z
  .object({
    is: z.lazy(() => MusicWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => MusicWhereInputObjectSchema).optional(),
  })
  .strict();

export const MusicRelationFilterObjectSchema = Schema;
