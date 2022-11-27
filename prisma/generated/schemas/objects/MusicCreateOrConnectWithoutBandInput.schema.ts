import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicCreateWithoutBandInputObjectSchema } from './MusicCreateWithoutBandInput.schema';
import { MusicUncheckedCreateWithoutBandInputObjectSchema } from './MusicUncheckedCreateWithoutBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateOrConnectWithoutBandInput> = z
  .object({
    where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MusicCreateWithoutBandInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutBandInputObjectSchema),
    ]),
  })
  .strict();

export const MusicCreateOrConnectWithoutBandInputObjectSchema = Schema;
