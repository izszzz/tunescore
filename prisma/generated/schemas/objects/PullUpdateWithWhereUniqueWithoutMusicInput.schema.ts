import { z } from 'zod';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';
import { PullUpdateWithoutMusicInputObjectSchema } from './PullUpdateWithoutMusicInput.schema';
import { PullUncheckedUpdateWithoutMusicInputObjectSchema } from './PullUncheckedUpdateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUpdateWithWhereUniqueWithoutMusicInput> = z
  .object({
    where: z.lazy(() => PullWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PullUpdateWithoutMusicInputObjectSchema),
      z.lazy(() => PullUncheckedUpdateWithoutMusicInputObjectSchema),
    ]),
  })
  .strict();

export const PullUpdateWithWhereUniqueWithoutMusicInputObjectSchema = Schema;
