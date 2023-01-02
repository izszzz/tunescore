import { z } from 'zod';
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema';
import { ParticipationCreateWithoutMusicInputObjectSchema } from './ParticipationCreateWithoutMusicInput.schema';
import { ParticipationUncheckedCreateWithoutMusicInputObjectSchema } from './ParticipationUncheckedCreateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationCreateOrConnectWithoutMusicInput> =
  z
    .object({
      where: z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ParticipationCreateWithoutMusicInputObjectSchema),
        z.lazy(() => ParticipationUncheckedCreateWithoutMusicInputObjectSchema),
      ]),
    })
    .strict();

export const ParticipationCreateOrConnectWithoutMusicInputObjectSchema = Schema;
