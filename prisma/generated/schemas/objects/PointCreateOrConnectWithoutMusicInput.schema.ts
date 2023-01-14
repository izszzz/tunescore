import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointCreateWithoutMusicInputObjectSchema } from './PointCreateWithoutMusicInput.schema';
import { PointUncheckedCreateWithoutMusicInputObjectSchema } from './PointUncheckedCreateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateOrConnectWithoutMusicInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PointCreateWithoutMusicInputObjectSchema),
      z.lazy(() => PointUncheckedCreateWithoutMusicInputObjectSchema),
    ]),
  })
  .strict();

export const PointCreateOrConnectWithoutMusicInputObjectSchema = Schema;
