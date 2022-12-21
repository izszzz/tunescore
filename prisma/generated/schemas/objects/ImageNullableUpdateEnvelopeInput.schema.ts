import { z } from 'zod';
import { ImageCreateInputObjectSchema } from './ImageCreateInput.schema';
import { ImageUpsertInputObjectSchema } from './ImageUpsertInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageNullableUpdateEnvelopeInput> = z
  .object({
    set: z
      .lazy(() => ImageCreateInputObjectSchema)
      .optional()
      .nullable(),
    upsert: z.lazy(() => ImageUpsertInputObjectSchema).optional(),
    unset: z.boolean().optional(),
  })
  .strict();

export const ImageNullableUpdateEnvelopeInputObjectSchema = Schema;
