import { z } from 'zod';
import { BandWhereInputObjectSchema } from './BandWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandListRelationFilter> = z
  .object({
    every: z.lazy(() => BandWhereInputObjectSchema).optional(),
    some: z.lazy(() => BandWhereInputObjectSchema).optional(),
    none: z.lazy(() => BandWhereInputObjectSchema).optional(),
  })
  .strict();

export const BandListRelationFilterObjectSchema = Schema;
