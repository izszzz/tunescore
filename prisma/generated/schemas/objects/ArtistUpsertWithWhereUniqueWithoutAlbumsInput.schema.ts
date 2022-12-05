import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutAlbumsInputObjectSchema } from './ArtistUpdateWithoutAlbumsInput.schema';
import { ArtistUncheckedUpdateWithoutAlbumsInputObjectSchema } from './ArtistUncheckedUpdateWithoutAlbumsInput.schema';
import { ArtistCreateWithoutAlbumsInputObjectSchema } from './ArtistCreateWithoutAlbumsInput.schema';
import { ArtistUncheckedCreateWithoutAlbumsInputObjectSchema } from './ArtistUncheckedCreateWithoutAlbumsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpsertWithWhereUniqueWithoutAlbumsInput> =
  z
    .object({
      where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ArtistUpdateWithoutAlbumsInputObjectSchema),
        z.lazy(() => ArtistUncheckedUpdateWithoutAlbumsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ArtistCreateWithoutAlbumsInputObjectSchema),
        z.lazy(() => ArtistUncheckedCreateWithoutAlbumsInputObjectSchema),
      ]),
    })
    .strict();

export const ArtistUpsertWithWhereUniqueWithoutAlbumsInputObjectSchema = Schema;
