import { z } from 'zod';
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema';
import { ParticipationUpdateWithoutMusicInputObjectSchema } from './ParticipationUpdateWithoutMusicInput.schema';
import { ParticipationUncheckedUpdateWithoutMusicInputObjectSchema } from './ParticipationUncheckedUpdateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationUpdateWithWhereUniqueWithoutMusicInput> =
  z
    .object({
      where: z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ParticipationUpdateWithoutMusicInputObjectSchema),
        z.lazy(() => ParticipationUncheckedUpdateWithoutMusicInputObjectSchema),
      ]),
    })
    .strict();

export const ParticipationUpdateWithWhereUniqueWithoutMusicInputObjectSchema =
  Schema;
