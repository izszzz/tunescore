import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicCreateWithoutPointsInputObjectSchema } from './MusicCreateWithoutPointsInput.schema';
import { MusicUncheckedCreateWithoutPointsInputObjectSchema } from './MusicUncheckedCreateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateOrConnectWithoutPointsInput> = z
  .object({
    where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MusicCreateWithoutPointsInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutPointsInputObjectSchema),
    ]),
  })
  .strict();

export const MusicCreateOrConnectWithoutPointsInputObjectSchema = Schema;
