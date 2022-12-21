import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageSizeObjectEqualityInput> = z
  .object({
    small: z.string(),
    medium: z.string(),
    large: z.string(),
  })
  .strict();

export const ImageSizeObjectEqualityInputObjectSchema = Schema;
