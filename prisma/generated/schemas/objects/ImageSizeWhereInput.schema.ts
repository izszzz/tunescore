import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

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
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    medium: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    large: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const ImageSizeWhereInputObjectSchema = Schema;
