import { z } from 'zod';
import { MusicUpdateWithoutParticipationsInputObjectSchema } from './MusicUpdateWithoutParticipationsInput.schema';
import { MusicUncheckedUpdateWithoutParticipationsInputObjectSchema } from './MusicUncheckedUpdateWithoutParticipationsInput.schema';
import { MusicCreateWithoutParticipationsInputObjectSchema } from './MusicCreateWithoutParticipationsInput.schema';
import { MusicUncheckedCreateWithoutParticipationsInputObjectSchema } from './MusicUncheckedCreateWithoutParticipationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpsertWithoutParticipationsInput> = z
  .object({
    update: z.union([
      z.lazy(() => MusicUpdateWithoutParticipationsInputObjectSchema),
      z.lazy(() => MusicUncheckedUpdateWithoutParticipationsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MusicCreateWithoutParticipationsInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutParticipationsInputObjectSchema),
    ]),
  })
  .strict();

export const MusicUpsertWithoutParticipationsInputObjectSchema = Schema;
