import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicCreateWithoutPullsInputObjectSchema } from './MusicCreateWithoutPullsInput.schema';
import { MusicUncheckedCreateWithoutPullsInputObjectSchema } from './MusicUncheckedCreateWithoutPullsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateOrConnectWithoutPullsInput> = z
  .object({
    where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MusicCreateWithoutPullsInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutPullsInputObjectSchema),
    ]),
  })
  .strict();

export const MusicCreateOrConnectWithoutPullsInputObjectSchema = Schema;
