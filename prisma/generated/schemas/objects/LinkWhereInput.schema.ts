import { z } from 'zod';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ImageNullableCompositeFilterObjectSchema } from './ImageNullableCompositeFilter.schema';
import { ImageObjectEqualityInputObjectSchema } from './ImageObjectEqualityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LinkWhereInputObjectSchema),
        z.lazy(() => LinkWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LinkWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LinkWhereInputObjectSchema),
        z.lazy(() => LinkWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    image: z
      .union([
        z.lazy(() => ImageNullableCompositeFilterObjectSchema),
        z.lazy(() => ImageObjectEqualityInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const LinkWhereInputObjectSchema = Schema;
