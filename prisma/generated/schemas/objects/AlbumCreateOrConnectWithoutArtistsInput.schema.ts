import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumCreateWithoutArtistsInputObjectSchema } from './AlbumCreateWithoutArtistsInput.schema';
import { AlbumUncheckedCreateWithoutArtistsInputObjectSchema } from './AlbumUncheckedCreateWithoutArtistsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCreateOrConnectWithoutArtistsInput> = z
  .object({
    where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AlbumCreateWithoutArtistsInputObjectSchema),
      z.lazy(() => AlbumUncheckedCreateWithoutArtistsInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumCreateOrConnectWithoutArtistsInputObjectSchema = Schema;
