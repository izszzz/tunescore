import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicCreateWithoutParticipationsInputObjectSchema } from './MusicCreateWithoutParticipationsInput.schema';
import { MusicUncheckedCreateWithoutParticipationsInputObjectSchema } from './MusicUncheckedCreateWithoutParticipationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateOrConnectWithoutParticipationsInput> =
  z
    .object({
      where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MusicCreateWithoutParticipationsInputObjectSchema),
        z.lazy(
          () => MusicUncheckedCreateWithoutParticipationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MusicCreateOrConnectWithoutParticipationsInputObjectSchema =
  Schema;
