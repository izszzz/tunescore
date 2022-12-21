import { z } from 'zod';
import { ImageSizeObjectEqualityInputObjectSchema } from './ImageSizeObjectEqualityInput.schema';
import { ImageSizeWhereInputObjectSchema } from './ImageSizeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageSizeCompositeFilter> = z
  .object({
    equals: z.lazy(() => ImageSizeObjectEqualityInputObjectSchema).optional(),
    is: z.lazy(() => ImageSizeWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => ImageSizeWhereInputObjectSchema).optional(),
  })
  .strict();

export const ImageSizeCompositeFilterObjectSchema = Schema;
