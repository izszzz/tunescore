import { z } from 'zod';
import { ImageSizeCreateInputObjectSchema } from './ImageSizeCreateInput.schema';
import { ImageSizeUpsertInputObjectSchema } from './ImageSizeUpsertInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageSizeNullableUpdateEnvelopeInput> = z
  .object({
    set: z
      .lazy(() => ImageSizeCreateInputObjectSchema)
      .optional()
      .nullable(),
    upsert: z.lazy(() => ImageSizeUpsertInputObjectSchema).optional(),
    unset: z.boolean().optional(),
  })
  .strict();

export const ImageSizeNullableUpdateEnvelopeInputObjectSchema = Schema;
