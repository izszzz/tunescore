import { z } from 'zod';
import { MusicCreateWithoutParticipationsInputObjectSchema } from './MusicCreateWithoutParticipationsInput.schema';
import { MusicUncheckedCreateWithoutParticipationsInputObjectSchema } from './MusicUncheckedCreateWithoutParticipationsInput.schema';
import { MusicCreateOrConnectWithoutParticipationsInputObjectSchema } from './MusicCreateOrConnectWithoutParticipationsInput.schema';
import { MusicUpsertWithoutParticipationsInputObjectSchema } from './MusicUpsertWithoutParticipationsInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutParticipationsInputObjectSchema } from './MusicUpdateWithoutParticipationsInput.schema';
import { MusicUncheckedUpdateWithoutParticipationsInputObjectSchema } from './MusicUncheckedUpdateWithoutParticipationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateOneRequiredWithoutParticipationsNestedInput> =
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
      upsert: z
        .lazy(() => MusicUpsertWithoutParticipationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MusicWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MusicUpdateWithoutParticipationsInputObjectSchema),
          z.lazy(
            () => MusicUncheckedUpdateWithoutParticipationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MusicUpdateOneRequiredWithoutParticipationsNestedInputObjectSchema =
  Schema;
