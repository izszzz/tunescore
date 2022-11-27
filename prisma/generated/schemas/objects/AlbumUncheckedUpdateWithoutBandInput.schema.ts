import { z } from 'zod';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { MusicUncheckedUpdateManyWithoutAlbumsNestedInputObjectSchema } from './MusicUncheckedUpdateManyWithoutAlbumsNestedInput.schema';
import { AlbumUpdatemusicIDsInputObjectSchema } from './AlbumUpdatemusicIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUncheckedUpdateWithoutBandInput> = z
  .object({
    title: z
      .union([
        z.lazy(() => LocalesUpdateEnvelopeInputObjectSchema),
        z.lazy(() => LocalesCreateInputObjectSchema),
      ])
      .optional(),
    musics: z
      .lazy(() => MusicUncheckedUpdateManyWithoutAlbumsNestedInputObjectSchema)
      .optional(),
    musicIDs: z
      .union([
        z.lazy(() => AlbumUpdatemusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const AlbumUncheckedUpdateWithoutBandInputObjectSchema = Schema;
