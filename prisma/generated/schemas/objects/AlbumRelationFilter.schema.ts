import { z } from 'zod';
import { AlbumWhereInputObjectSchema } from './AlbumWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumRelationFilter> = z
  .object({
    is: z
      .lazy(() => AlbumWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => AlbumWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const AlbumRelationFilterObjectSchema = Schema;
