import { z } from 'zod';
import { ImageObjectEqualityInputObjectSchema } from './ImageObjectEqualityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkImageObjectEqualityInput> = z
  .object({
    id: z.string().optional().nullable(),
    url: z.string().optional().nullable(),
    image: z.lazy(() => ImageObjectEqualityInputObjectSchema),
  })
  .strict();

export const LinkImageObjectEqualityInputObjectSchema = Schema;
