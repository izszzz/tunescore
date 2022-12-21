import { z } from 'zod';
import { ImageSizeCompositeFilterObjectSchema } from './ImageSizeCompositeFilter.schema';
import { ImageSizeObjectEqualityInputObjectSchema } from './ImageSizeObjectEqualityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ImageWhereInputObjectSchema),
        z.lazy(() => ImageWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ImageWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ImageWhereInputObjectSchema),
        z.lazy(() => ImageWhereInputObjectSchema).array(),
      ])
      .optional(),
    size: z
      .union([
        z.lazy(() => ImageSizeCompositeFilterObjectSchema),
        z.lazy(() => ImageSizeObjectEqualityInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ImageWhereInputObjectSchema = Schema;
