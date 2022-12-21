import { z } from 'zod';
import { ImageSizeCreateInputObjectSchema } from './ImageSizeCreateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCreateInput> = z
  .object({
    size: z.lazy(() => ImageSizeCreateInputObjectSchema),
  })
  .strict();

export const ImageCreateInputObjectSchema = Schema;
