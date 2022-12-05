import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumUpdateWithoutArtistsInputObjectSchema } from './AlbumUpdateWithoutArtistsInput.schema';
import { AlbumUncheckedUpdateWithoutArtistsInputObjectSchema } from './AlbumUncheckedUpdateWithoutArtistsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpdateWithWhereUniqueWithoutArtistsInput> =
  z
    .object({
      where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AlbumUpdateWithoutArtistsInputObjectSchema),
        z.lazy(() => AlbumUncheckedUpdateWithoutArtistsInputObjectSchema),
      ]),
    })
    .strict();

export const AlbumUpdateWithWhereUniqueWithoutArtistsInputObjectSchema = Schema;
