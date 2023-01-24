import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicCreateWithoutCartsInputObjectSchema } from './MusicCreateWithoutCartsInput.schema';
import { MusicUncheckedCreateWithoutCartsInputObjectSchema } from './MusicUncheckedCreateWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateOrConnectWithoutCartsInput> = z
  .object({
    where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MusicCreateWithoutCartsInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutCartsInputObjectSchema),
    ]),
  })
  .strict();

export const MusicCreateOrConnectWithoutCartsInputObjectSchema = Schema;
