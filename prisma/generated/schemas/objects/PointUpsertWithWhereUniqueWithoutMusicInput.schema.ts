import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithoutMusicInputObjectSchema } from './PointUpdateWithoutMusicInput.schema';
import { PointUncheckedUpdateWithoutMusicInputObjectSchema } from './PointUncheckedUpdateWithoutMusicInput.schema';
import { PointCreateWithoutMusicInputObjectSchema } from './PointCreateWithoutMusicInput.schema';
import { PointUncheckedCreateWithoutMusicInputObjectSchema } from './PointUncheckedCreateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpsertWithWhereUniqueWithoutMusicInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PointUpdateWithoutMusicInputObjectSchema),
      z.lazy(() => PointUncheckedUpdateWithoutMusicInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PointCreateWithoutMusicInputObjectSchema),
      z.lazy(() => PointUncheckedCreateWithoutMusicInputObjectSchema),
    ]),
  })
  .strict();

export const PointUpsertWithWhereUniqueWithoutMusicInputObjectSchema = Schema;
