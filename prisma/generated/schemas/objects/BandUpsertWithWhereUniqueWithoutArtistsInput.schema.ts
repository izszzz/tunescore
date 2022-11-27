import { z } from 'zod';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandUpdateWithoutArtistsInputObjectSchema } from './BandUpdateWithoutArtistsInput.schema';
import { BandUncheckedUpdateWithoutArtistsInputObjectSchema } from './BandUncheckedUpdateWithoutArtistsInput.schema';
import { BandCreateWithoutArtistsInputObjectSchema } from './BandCreateWithoutArtistsInput.schema';
import { BandUncheckedCreateWithoutArtistsInputObjectSchema } from './BandUncheckedCreateWithoutArtistsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpsertWithWhereUniqueWithoutArtistsInput> = z
  .object({
    where: z.lazy(() => BandWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => BandUpdateWithoutArtistsInputObjectSchema),
      z.lazy(() => BandUncheckedUpdateWithoutArtistsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BandCreateWithoutArtistsInputObjectSchema),
      z.lazy(() => BandUncheckedCreateWithoutArtistsInputObjectSchema),
    ]),
  })
  .strict();

export const BandUpsertWithWhereUniqueWithoutArtistsInputObjectSchema = Schema;
