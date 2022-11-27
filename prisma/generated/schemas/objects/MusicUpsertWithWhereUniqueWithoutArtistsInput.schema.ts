import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutArtistsInputObjectSchema } from './MusicUpdateWithoutArtistsInput.schema';
import { MusicUncheckedUpdateWithoutArtistsInputObjectSchema } from './MusicUncheckedUpdateWithoutArtistsInput.schema';
import { MusicCreateWithoutArtistsInputObjectSchema } from './MusicCreateWithoutArtistsInput.schema';
import { MusicUncheckedCreateWithoutArtistsInputObjectSchema } from './MusicUncheckedCreateWithoutArtistsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpsertWithWhereUniqueWithoutArtistsInput> =
  z
    .object({
      where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MusicUpdateWithoutArtistsInputObjectSchema),
        z.lazy(() => MusicUncheckedUpdateWithoutArtistsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MusicCreateWithoutArtistsInputObjectSchema),
        z.lazy(() => MusicUncheckedCreateWithoutArtistsInputObjectSchema),
      ]),
    })
    .strict();

export const MusicUpsertWithWhereUniqueWithoutArtistsInputObjectSchema = Schema;
