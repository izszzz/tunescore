import { z } from 'zod';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { BandUpdateOneWithoutAlbumsNestedInputObjectSchema } from './BandUpdateOneWithoutAlbumsNestedInput.schema';
import { AlbumUpdatemusicIDsInputObjectSchema } from './AlbumUpdatemusicIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpdateWithoutMusicsInput> = z
  .object({
    title: z
      .union([
        z.lazy(() => LocalesUpdateEnvelopeInputObjectSchema),
        z.lazy(() => LocalesCreateInputObjectSchema),
      ])
      .optional(),
    band: z
      .lazy(() => BandUpdateOneWithoutAlbumsNestedInputObjectSchema)
      .optional(),
    musicIDs: z
      .union([
        z.lazy(() => AlbumUpdatemusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const AlbumUpdateWithoutMusicsInputObjectSchema = Schema;
