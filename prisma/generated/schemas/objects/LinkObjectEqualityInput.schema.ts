import { z } from 'zod';
import { ImageObjectEqualityInputObjectSchema } from './ImageObjectEqualityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkObjectEqualityInput> = z
  .object({
    id: z.string().optional().nullable(),
    image: z
      .lazy(() => ImageObjectEqualityInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const LinkObjectEqualityInputObjectSchema = Schema;
