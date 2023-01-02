import { z } from 'zod';
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema';
import { ParticipationUpdateWithoutMusicInputObjectSchema } from './ParticipationUpdateWithoutMusicInput.schema';
import { ParticipationUncheckedUpdateWithoutMusicInputObjectSchema } from './ParticipationUncheckedUpdateWithoutMusicInput.schema';
import { ParticipationCreateWithoutMusicInputObjectSchema } from './ParticipationCreateWithoutMusicInput.schema';
import { ParticipationUncheckedCreateWithoutMusicInputObjectSchema } from './ParticipationUncheckedCreateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationUpsertWithWhereUniqueWithoutMusicInput> =
  z
    .object({
      where: z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ParticipationUpdateWithoutMusicInputObjectSchema),
        z.lazy(() => ParticipationUncheckedUpdateWithoutMusicInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ParticipationCreateWithoutMusicInputObjectSchema),
        z.lazy(() => ParticipationUncheckedCreateWithoutMusicInputObjectSchema),
      ]),
    })
    .strict();

export const ParticipationUpsertWithWhereUniqueWithoutMusicInputObjectSchema =
  Schema;
