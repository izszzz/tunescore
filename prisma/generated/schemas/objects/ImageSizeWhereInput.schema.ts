import { z } from 'zod';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageSizeWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ImageSizeWhereInputObjectSchema),
        z.lazy(() => ImageSizeWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ImageSizeWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ImageSizeWhereInputObjectSchema),
        z.lazy(() => ImageSizeWhereInputObjectSchema).array(),
      ])
      .optional(),
    small: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    medium: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    large: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const ImageSizeWhereInputObjectSchema = Schema;
