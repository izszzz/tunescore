import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicCreateWithoutLyristsInputObjectSchema } from './MusicCreateWithoutLyristsInput.schema';
import { MusicUncheckedCreateWithoutLyristsInputObjectSchema } from './MusicUncheckedCreateWithoutLyristsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateOrConnectWithoutLyristsInput> = z
  .object({
    where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MusicCreateWithoutLyristsInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutLyristsInputObjectSchema),
    ]),
  })
  .strict();

export const MusicCreateOrConnectWithoutLyristsInputObjectSchema = Schema;
