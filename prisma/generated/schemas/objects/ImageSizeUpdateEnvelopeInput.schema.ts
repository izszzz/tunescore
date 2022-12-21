import { z } from 'zod';
import { ImageSizeCreateInputObjectSchema } from './ImageSizeCreateInput.schema';
import { ImageSizeUpdateInputObjectSchema } from './ImageSizeUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageSizeUpdateEnvelopeInput> = z
  .object({
    set: z.lazy(() => ImageSizeCreateInputObjectSchema).optional(),
    update: z.lazy(() => ImageSizeUpdateInputObjectSchema).optional(),
  })
  .strict();

export const ImageSizeUpdateEnvelopeInputObjectSchema = Schema;
