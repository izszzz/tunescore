import { z } from 'zod';
import { ImageCreateInputObjectSchema } from './ImageCreateInput.schema';
import { ImageUpdateInputObjectSchema } from './ImageUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUpdateEnvelopeInput> = z
  .object({
    set: z.lazy(() => ImageCreateInputObjectSchema).optional(),
    update: z.lazy(() => ImageUpdateInputObjectSchema).optional(),
  })
  .strict();

export const ImageUpdateEnvelopeInputObjectSchema = Schema;
