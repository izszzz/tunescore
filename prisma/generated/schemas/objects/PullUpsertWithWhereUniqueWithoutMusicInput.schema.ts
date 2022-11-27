import { z } from 'zod';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';
import { PullUpdateWithoutMusicInputObjectSchema } from './PullUpdateWithoutMusicInput.schema';
import { PullUncheckedUpdateWithoutMusicInputObjectSchema } from './PullUncheckedUpdateWithoutMusicInput.schema';
import { PullCreateWithoutMusicInputObjectSchema } from './PullCreateWithoutMusicInput.schema';
import { PullUncheckedCreateWithoutMusicInputObjectSchema } from './PullUncheckedCreateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUpsertWithWhereUniqueWithoutMusicInput> = z
  .object({
    where: z.lazy(() => PullWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PullUpdateWithoutMusicInputObjectSchema),
      z.lazy(() => PullUncheckedUpdateWithoutMusicInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PullCreateWithoutMusicInputObjectSchema),
      z.lazy(() => PullUncheckedCreateWithoutMusicInputObjectSchema),
    ]),
  })
  .strict();

export const PullUpsertWithWhereUniqueWithoutMusicInputObjectSchema = Schema;
