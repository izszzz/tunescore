import { z } from 'zod';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ImageCompositeFilterObjectSchema } from './ImageCompositeFilter.schema';
import { ImageObjectEqualityInputObjectSchema } from './ImageObjectEqualityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkImageWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LinkImageWhereInputObjectSchema),
        z.lazy(() => LinkImageWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LinkImageWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LinkImageWhereInputObjectSchema),
        z.lazy(() => LinkImageWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    image: z
      .union([
        z.lazy(() => ImageCompositeFilterObjectSchema),
        z.lazy(() => ImageObjectEqualityInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const LinkImageWhereInputObjectSchema = Schema;
