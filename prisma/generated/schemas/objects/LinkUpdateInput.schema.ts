import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ImageNullableUpdateEnvelopeInputObjectSchema } from './ImageNullableUpdateEnvelopeInput.schema';
import { ImageCreateInputObjectSchema } from './ImageCreateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    image: z
      .union([
        z.lazy(() => ImageNullableUpdateEnvelopeInputObjectSchema),
        z.lazy(() => ImageCreateInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const LinkUpdateInputObjectSchema = Schema;
