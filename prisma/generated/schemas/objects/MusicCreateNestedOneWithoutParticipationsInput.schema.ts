import { z } from 'zod';
import { MusicCreateWithoutParticipationsInputObjectSchema } from './MusicCreateWithoutParticipationsInput.schema';
import { MusicUncheckedCreateWithoutParticipationsInputObjectSchema } from './MusicUncheckedCreateWithoutParticipationsInput.schema';
import { MusicCreateOrConnectWithoutParticipationsInputObjectSchema } from './MusicCreateOrConnectWithoutParticipationsInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateNestedOneWithoutParticipationsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MusicCreateWithoutParticipationsInputObjectSchema),
          z.lazy(
            () => MusicUncheckedCreateWithoutParticipationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => MusicCreateOrConnectWithoutParticipationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MusicWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const MusicCreateNestedOneWithoutParticipationsInputObjectSchema =
  Schema;
