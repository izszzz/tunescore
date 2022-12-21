import { z } from 'zod';
import { ImageSizeOrderByInputObjectSchema } from './ImageSizeOrderByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageOrderByInput> = z
  .object({
    size: z.lazy(() => ImageSizeOrderByInputObjectSchema).optional(),
  })
  .strict();

export const ImageOrderByInputObjectSchema = Schema;
