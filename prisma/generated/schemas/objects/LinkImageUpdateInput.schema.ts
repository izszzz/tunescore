import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ImageUpdateEnvelopeInputObjectSchema } from './ImageUpdateEnvelopeInput.schema';
import { ImageCreateInputObjectSchema } from './ImageCreateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkImageUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    url: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    image: z
      .union([
        z.lazy(() => ImageUpdateEnvelopeInputObjectSchema),
        z.lazy(() => ImageCreateInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const LinkImageUpdateInputObjectSchema = Schema;
