import { z } from 'zod';
import { BandWhereInputObjectSchema } from './BandWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandRelationFilter> = z
  .object({
    is: z
      .lazy(() => BandWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => BandWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const BandRelationFilterObjectSchema = Schema;
