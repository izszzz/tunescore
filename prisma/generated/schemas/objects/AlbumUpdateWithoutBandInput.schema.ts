import { z } from 'zod';
import { LocalesUpdateEnvelopeInputObjectSchema } from './LocalesUpdateEnvelopeInput.schema';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { MusicUpdateManyWithoutAlbumsNestedInputObjectSchema } from './MusicUpdateManyWithoutAlbumsNestedInput.schema';
import { AlbumUpdatemusicIDsInputObjectSchema } from './AlbumUpdatemusicIDsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpdateWithoutBandInput> = z
  .object({
    title: z
      .union([
        z.lazy(() => LocalesUpdateEnvelopeInputObjectSchema),
        z.lazy(() => LocalesCreateInputObjectSchema),
      ])
      .optional(),
    musics: z
      .lazy(() => MusicUpdateManyWithoutAlbumsNestedInputObjectSchema)
      .optional(),
    musicIDs: z
      .union([
        z.lazy(() => AlbumUpdatemusicIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const AlbumUpdateWithoutBandInputObjectSchema = Schema;
