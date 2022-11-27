import { z } from 'zod';
import { MusicUpdateWithoutPullsInputObjectSchema } from './MusicUpdateWithoutPullsInput.schema';
import { MusicUncheckedUpdateWithoutPullsInputObjectSchema } from './MusicUncheckedUpdateWithoutPullsInput.schema';
import { MusicCreateWithoutPullsInputObjectSchema } from './MusicCreateWithoutPullsInput.schema';
import { MusicUncheckedCreateWithoutPullsInputObjectSchema } from './MusicUncheckedCreateWithoutPullsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpsertWithoutPullsInput> = z
  .object({
    update: z.union([
      z.lazy(() => MusicUpdateWithoutPullsInputObjectSchema),
      z.lazy(() => MusicUncheckedUpdateWithoutPullsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MusicCreateWithoutPullsInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutPullsInputObjectSchema),
    ]),
  })
  .strict();

export const MusicUpsertWithoutPullsInputObjectSchema = Schema;
