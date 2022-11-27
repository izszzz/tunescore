import { z } from 'zod';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandUpdateWithoutArtistsInputObjectSchema } from './BandUpdateWithoutArtistsInput.schema';
import { BandUncheckedUpdateWithoutArtistsInputObjectSchema } from './BandUncheckedUpdateWithoutArtistsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpdateWithWhereUniqueWithoutArtistsInput> = z
  .object({
    where: z.lazy(() => BandWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => BandUpdateWithoutArtistsInputObjectSchema),
      z.lazy(() => BandUncheckedUpdateWithoutArtistsInputObjectSchema),
    ]),
  })
  .strict();

export const BandUpdateWithWhereUniqueWithoutArtistsInputObjectSchema = Schema;
