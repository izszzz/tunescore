import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutArtistsInputObjectSchema } from './MusicUpdateWithoutArtistsInput.schema';
import { MusicUncheckedUpdateWithoutArtistsInputObjectSchema } from './MusicUncheckedUpdateWithoutArtistsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateWithWhereUniqueWithoutArtistsInput> =
  z
    .object({
      where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MusicUpdateWithoutArtistsInputObjectSchema),
        z.lazy(() => MusicUncheckedUpdateWithoutArtistsInputObjectSchema),
      ]),
    })
    .strict();

export const MusicUpdateWithWhereUniqueWithoutArtistsInputObjectSchema = Schema;
