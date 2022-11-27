import { z } from 'zod';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';
import { PullCreateWithoutMusicInputObjectSchema } from './PullCreateWithoutMusicInput.schema';
import { PullUncheckedCreateWithoutMusicInputObjectSchema } from './PullUncheckedCreateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullCreateOrConnectWithoutMusicInput> = z
  .object({
    where: z.lazy(() => PullWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PullCreateWithoutMusicInputObjectSchema),
      z.lazy(() => PullUncheckedCreateWithoutMusicInputObjectSchema),
    ]),
  })
  .strict();

export const PullCreateOrConnectWithoutMusicInputObjectSchema = Schema;
