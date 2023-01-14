import { z } from 'zod';
import { MusicUpdateWithoutPointsInputObjectSchema } from './MusicUpdateWithoutPointsInput.schema';
import { MusicUncheckedUpdateWithoutPointsInputObjectSchema } from './MusicUncheckedUpdateWithoutPointsInput.schema';
import { MusicCreateWithoutPointsInputObjectSchema } from './MusicCreateWithoutPointsInput.schema';
import { MusicUncheckedCreateWithoutPointsInputObjectSchema } from './MusicUncheckedCreateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpsertWithoutPointsInput> = z
  .object({
    update: z.union([
      z.lazy(() => MusicUpdateWithoutPointsInputObjectSchema),
      z.lazy(() => MusicUncheckedUpdateWithoutPointsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MusicCreateWithoutPointsInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutPointsInputObjectSchema),
    ]),
  })
  .strict();

export const MusicUpsertWithoutPointsInputObjectSchema = Schema;
