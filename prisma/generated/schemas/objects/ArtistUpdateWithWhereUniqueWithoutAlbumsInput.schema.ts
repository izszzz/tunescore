import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutAlbumsInputObjectSchema } from './ArtistUpdateWithoutAlbumsInput.schema';
import { ArtistUncheckedUpdateWithoutAlbumsInputObjectSchema } from './ArtistUncheckedUpdateWithoutAlbumsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateWithWhereUniqueWithoutAlbumsInput> =
  z
    .object({
      where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ArtistUpdateWithoutAlbumsInputObjectSchema),
        z.lazy(() => ArtistUncheckedUpdateWithoutAlbumsInputObjectSchema),
      ]),
    })
    .strict();

export const ArtistUpdateWithWhereUniqueWithoutAlbumsInputObjectSchema = Schema;
