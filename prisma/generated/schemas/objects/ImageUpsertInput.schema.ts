import { z } from 'zod';
import { ImageCreateInputObjectSchema } from './ImageCreateInput.schema';
import { ImageUpdateInputObjectSchema } from './ImageUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageUpsertInput> = z
  .object({
    set: z.lazy(() => ImageCreateInputObjectSchema).nullable(),
    update: z.lazy(() => ImageUpdateInputObjectSchema),
  })
  .strict();

export const ImageUpsertInputObjectSchema = Schema;
