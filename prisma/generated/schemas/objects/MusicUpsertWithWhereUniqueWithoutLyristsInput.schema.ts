import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutLyristsInputObjectSchema } from './MusicUpdateWithoutLyristsInput.schema';
import { MusicUncheckedUpdateWithoutLyristsInputObjectSchema } from './MusicUncheckedUpdateWithoutLyristsInput.schema';
import { MusicCreateWithoutLyristsInputObjectSchema } from './MusicCreateWithoutLyristsInput.schema';
import { MusicUncheckedCreateWithoutLyristsInputObjectSchema } from './MusicUncheckedCreateWithoutLyristsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpsertWithWhereUniqueWithoutLyristsInput> =
  z
    .object({
      where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MusicUpdateWithoutLyristsInputObjectSchema),
        z.lazy(() => MusicUncheckedUpdateWithoutLyristsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MusicCreateWithoutLyristsInputObjectSchema),
        z.lazy(() => MusicUncheckedCreateWithoutLyristsInputObjectSchema),
      ]),
    })
    .strict();

export const MusicUpsertWithWhereUniqueWithoutLyristsInputObjectSchema = Schema;
