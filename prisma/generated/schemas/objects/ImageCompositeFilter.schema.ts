import { z } from 'zod';
import { ImageObjectEqualityInputObjectSchema } from './ImageObjectEqualityInput.schema';
import { ImageWhereInputObjectSchema } from './ImageWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageCompositeFilter> = z
  .object({
    equals: z.lazy(() => ImageObjectEqualityInputObjectSchema).optional(),
    is: z.lazy(() => ImageWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => ImageWhereInputObjectSchema).optional(),
  })
  .strict();

export const ImageCompositeFilterObjectSchema = Schema;
