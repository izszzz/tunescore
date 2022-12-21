import { z } from 'zod';
import { ImageSizeCreateInputObjectSchema } from './ImageSizeCreateInput.schema';
import { ImageSizeUpdateInputObjectSchema } from './ImageSizeUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ImageSizeUpsertInput> = z
  .object({
    set: z.lazy(() => ImageSizeCreateInputObjectSchema).nullable(),
    update: z.lazy(() => ImageSizeUpdateInputObjectSchema),
  })
  .strict();

export const ImageSizeUpsertInputObjectSchema = Schema;
