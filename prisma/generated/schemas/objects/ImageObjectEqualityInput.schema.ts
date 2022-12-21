import { z } from 'zod';
import { ImageSizeObjectEqualityInputObjectSchema } from './ImageSizeObjectEqualityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageObjectEqualityInput> = z
  .object({
    size: z.lazy(() => ImageSizeObjectEqualityInputObjectSchema),
  })
  .strict();

export const ImageObjectEqualityInputObjectSchema = Schema;
