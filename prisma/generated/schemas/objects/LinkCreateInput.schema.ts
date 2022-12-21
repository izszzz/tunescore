import { z } from 'zod';
import { ImageCreateInputObjectSchema } from './ImageCreateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkCreateInput> = z
  .object({
    id: z.string().optional().nullable(),
    image: z
      .lazy(() => ImageCreateInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const LinkCreateInputObjectSchema = Schema;
