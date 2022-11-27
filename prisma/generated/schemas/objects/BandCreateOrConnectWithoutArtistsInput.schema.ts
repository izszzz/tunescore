import { z } from 'zod';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandCreateWithoutArtistsInputObjectSchema } from './BandCreateWithoutArtistsInput.schema';
import { BandUncheckedCreateWithoutArtistsInputObjectSchema } from './BandUncheckedCreateWithoutArtistsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCreateOrConnectWithoutArtistsInput> = z
  .object({
    where: z.lazy(() => BandWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BandCreateWithoutArtistsInputObjectSchema),
      z.lazy(() => BandUncheckedCreateWithoutArtistsInputObjectSchema),
    ]),
  })
  .strict();

export const BandCreateOrConnectWithoutArtistsInputObjectSchema = Schema;
