import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutMusicsInputObjectSchema } from './ArtistUpdateWithoutMusicsInput.schema';
import { ArtistUncheckedUpdateWithoutMusicsInputObjectSchema } from './ArtistUncheckedUpdateWithoutMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateWithWhereUniqueWithoutMusicsInput> =
  z
    .object({
      where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ArtistUpdateWithoutMusicsInputObjectSchema),
        z.lazy(() => ArtistUncheckedUpdateWithoutMusicsInputObjectSchema),
      ]),
    })
    .strict();

export const ArtistUpdateWithWhereUniqueWithoutMusicsInputObjectSchema = Schema;
