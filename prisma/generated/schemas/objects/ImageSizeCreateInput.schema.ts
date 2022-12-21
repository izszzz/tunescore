import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageSizeCreateInput> = z
  .object({
    small: z.string().optional().nullable(),
    medium: z.string().optional().nullable(),
    large: z.string().optional().nullable(),
  })
  .strict();

export const ImageSizeCreateInputObjectSchema = Schema;
