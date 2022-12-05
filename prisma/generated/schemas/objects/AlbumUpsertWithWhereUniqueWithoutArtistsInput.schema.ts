import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumUpdateWithoutArtistsInputObjectSchema } from './AlbumUpdateWithoutArtistsInput.schema';
import { AlbumUncheckedUpdateWithoutArtistsInputObjectSchema } from './AlbumUncheckedUpdateWithoutArtistsInput.schema';
import { AlbumCreateWithoutArtistsInputObjectSchema } from './AlbumCreateWithoutArtistsInput.schema';
import { AlbumUncheckedCreateWithoutArtistsInputObjectSchema } from './AlbumUncheckedCreateWithoutArtistsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpsertWithWhereUniqueWithoutArtistsInput> =
  z
    .object({
      where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AlbumUpdateWithoutArtistsInputObjectSchema),
        z.lazy(() => AlbumUncheckedUpdateWithoutArtistsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => AlbumCreateWithoutArtistsInputObjectSchema),
        z.lazy(() => AlbumUncheckedCreateWithoutArtistsInputObjectSchema),
      ]),
    })
    .strict();

export const AlbumUpsertWithWhereUniqueWithoutArtistsInputObjectSchema = Schema;
