import { z } from 'zod';
import { MusicUpdateWithoutCartsInputObjectSchema } from './MusicUpdateWithoutCartsInput.schema';
import { MusicUncheckedUpdateWithoutCartsInputObjectSchema } from './MusicUncheckedUpdateWithoutCartsInput.schema';
import { MusicCreateWithoutCartsInputObjectSchema } from './MusicCreateWithoutCartsInput.schema';
import { MusicUncheckedCreateWithoutCartsInputObjectSchema } from './MusicUncheckedCreateWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpsertWithoutCartsInput> = z
  .object({
    update: z.union([
      z.lazy(() => MusicUpdateWithoutCartsInputObjectSchema),
      z.lazy(() => MusicUncheckedUpdateWithoutCartsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MusicCreateWithoutCartsInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutCartsInputObjectSchema),
    ]),
  })
  .strict();

export const MusicUpsertWithoutCartsInputObjectSchema = Schema;
