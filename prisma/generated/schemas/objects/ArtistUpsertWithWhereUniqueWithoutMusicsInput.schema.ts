import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutMusicsInputObjectSchema } from './ArtistUpdateWithoutMusicsInput.schema';
import { ArtistUncheckedUpdateWithoutMusicsInputObjectSchema } from './ArtistUncheckedUpdateWithoutMusicsInput.schema';
import { ArtistCreateWithoutMusicsInputObjectSchema } from './ArtistCreateWithoutMusicsInput.schema';
import { ArtistUncheckedCreateWithoutMusicsInputObjectSchema } from './ArtistUncheckedCreateWithoutMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpsertWithWhereUniqueWithoutMusicsInput> =
  z
    .object({
      where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ArtistUpdateWithoutMusicsInputObjectSchema),
        z.lazy(() => ArtistUncheckedUpdateWithoutMusicsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ArtistCreateWithoutMusicsInputObjectSchema),
        z.lazy(() => ArtistUncheckedCreateWithoutMusicsInputObjectSchema),
      ]),
    })
    .strict();

export const ArtistUpsertWithWhereUniqueWithoutMusicsInputObjectSchema = Schema;
