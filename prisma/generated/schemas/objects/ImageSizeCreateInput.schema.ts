import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageSizeCreateInput> = z
  .object({
    small: z.string(),
    medium: z.string(),
    large: z.string(),
  })
  .strict();

export const ImageSizeCreateInputObjectSchema = Schema;
