import { z } from 'zod';
import { ImageSizeUpdateEnvelopeInputObjectSchema } from './ImageSizeUpdateEnvelopeInput.schema';
import { ImageSizeCreateInputObjectSchema } from './ImageSizeCreateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUpdateInput> = z
  .object({
    size: z
      .union([
        z.lazy(() => ImageSizeUpdateEnvelopeInputObjectSchema),
        z.lazy(() => ImageSizeCreateInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ImageUpdateInputObjectSchema = Schema;
