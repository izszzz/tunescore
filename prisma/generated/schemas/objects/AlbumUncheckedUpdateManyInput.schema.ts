import { z } from 'zod';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { AlbumUpdatemusicIDsInputObjectSchema } from './AlbumUpdatemusicIDsInput.schema';
import { AlbumUpdateartistIDsInputObjectSchema } from './AlbumUpdateartistIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUncheckedUpdateManyInput> = z
  .object({
    title: z
      .union([
        z.lazy(() => LocalesUpdateEnvelopeInputObjectSchema),
        z.lazy(() => LocalesCreateInputObjectSchema),
      ])
      .optional(),
    bandId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    musicIDs: z
      .union([
        z.lazy(() => AlbumUpdatemusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    artistIDs: z
      .union([
        z.lazy(() => AlbumUpdateartistIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const AlbumUncheckedUpdateManyInputObjectSchema = Schema;
