import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutBandInputObjectSchema } from './MusicUpdateWithoutBandInput.schema';
import { MusicUncheckedUpdateWithoutBandInputObjectSchema } from './MusicUncheckedUpdateWithoutBandInput.schema';
import { MusicCreateWithoutBandInputObjectSchema } from './MusicCreateWithoutBandInput.schema';
import { MusicUncheckedCreateWithoutBandInputObjectSchema } from './MusicUncheckedCreateWithoutBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpsertWithWhereUniqueWithoutBandInput> = z
  .object({
    where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => MusicUpdateWithoutBandInputObjectSchema),
      z.lazy(() => MusicUncheckedUpdateWithoutBandInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MusicCreateWithoutBandInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutBandInputObjectSchema),
    ]),
  })
  .strict();

export const MusicUpsertWithWhereUniqueWithoutBandInputObjectSchema = Schema;
