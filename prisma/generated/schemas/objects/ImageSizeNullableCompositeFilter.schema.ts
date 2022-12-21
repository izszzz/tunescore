import { z } from 'zod';
import { ImageSizeObjectEqualityInputObjectSchema } from './ImageSizeObjectEqualityInput.schema';
import { ImageSizeWhereInputObjectSchema } from './ImageSizeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageSizeNullableCompositeFilter> = z
  .object({
    equals: z
      .lazy(() => ImageSizeObjectEqualityInputObjectSchema)
      .optional()
      .nullable(),
    is: z
      .lazy(() => ImageSizeWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ImageSizeWhereInputObjectSchema)
      .optional()
      .nullable(),
    isSet: z.boolean().optional(),
  })
  .strict();

export const ImageSizeNullableCompositeFilterObjectSchema = Schema;
