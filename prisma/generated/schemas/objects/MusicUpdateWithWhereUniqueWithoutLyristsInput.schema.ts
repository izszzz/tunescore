import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutLyristsInputObjectSchema } from './MusicUpdateWithoutLyristsInput.schema';
import { MusicUncheckedUpdateWithoutLyristsInputObjectSchema } from './MusicUncheckedUpdateWithoutLyristsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateWithWhereUniqueWithoutLyristsInput> =
  z
    .object({
      where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MusicUpdateWithoutLyristsInputObjectSchema),
        z.lazy(() => MusicUncheckedUpdateWithoutLyristsInputObjectSchema),
      ]),
    })
    .strict();

export const MusicUpdateWithWhereUniqueWithoutLyristsInputObjectSchema = Schema;
