import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutBandInputObjectSchema } from './MusicUpdateWithoutBandInput.schema';
import { MusicUncheckedUpdateWithoutBandInputObjectSchema } from './MusicUncheckedUpdateWithoutBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateWithWhereUniqueWithoutBandInput> = z
  .object({
    where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => MusicUpdateWithoutBandInputObjectSchema),
      z.lazy(() => MusicUncheckedUpdateWithoutBandInputObjectSchema),
    ]),
  })
  .strict();

export const MusicUpdateWithWhereUniqueWithoutBandInputObjectSchema = Schema;
