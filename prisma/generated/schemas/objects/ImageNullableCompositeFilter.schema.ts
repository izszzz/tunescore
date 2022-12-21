import { z } from 'zod';
import { ImageObjectEqualityInputObjectSchema } from './ImageObjectEqualityInput.schema';
import { ImageWhereInputObjectSchema } from './ImageWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageNullableCompositeFilter> = z
  .object({
    equals: z
      .lazy(() => ImageObjectEqualityInputObjectSchema)
      .optional()
      .nullable(),
    is: z
      .lazy(() => ImageWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ImageWhereInputObjectSchema)
      .optional()
      .nullable(),
    isSet: z.boolean().optional(),
  })
  .strict();

export const ImageNullableCompositeFilterObjectSchema = Schema;
