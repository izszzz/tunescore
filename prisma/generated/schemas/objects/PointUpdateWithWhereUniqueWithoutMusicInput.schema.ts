import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithoutMusicInputObjectSchema } from './PointUpdateWithoutMusicInput.schema';
import { PointUncheckedUpdateWithoutMusicInputObjectSchema } from './PointUncheckedUpdateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpdateWithWhereUniqueWithoutMusicInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PointUpdateWithoutMusicInputObjectSchema),
      z.lazy(() => PointUncheckedUpdateWithoutMusicInputObjectSchema),
    ]),
  })
  .strict();

export const PointUpdateWithWhereUniqueWithoutMusicInputObjectSchema = Schema;
