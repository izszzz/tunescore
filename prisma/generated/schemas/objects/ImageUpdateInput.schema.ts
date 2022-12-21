import { z } from 'zod';
import { ImageSizeNullableUpdateEnvelopeInputObjectSchema } from './ImageSizeNullableUpdateEnvelopeInput.schema';
import { ImageSizeCreateInputObjectSchema } from './ImageSizeCreateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUpdateInput> = z
  .object({
    size: z
      .union([
        z.lazy(() => ImageSizeNullableUpdateEnvelopeInputObjectSchema),
        z.lazy(() => ImageSizeCreateInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const ImageUpdateInputObjectSchema = Schema;
