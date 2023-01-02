import { z } from 'zod';
import { ParticipationCreateWithoutMusicInputObjectSchema } from './ParticipationCreateWithoutMusicInput.schema';
import { ParticipationUncheckedCreateWithoutMusicInputObjectSchema } from './ParticipationUncheckedCreateWithoutMusicInput.schema';
import { ParticipationCreateOrConnectWithoutMusicInputObjectSchema } from './ParticipationCreateOrConnectWithoutMusicInput.schema';
import { ParticipationCreateManyMusicInputEnvelopeObjectSchema } from './ParticipationCreateManyMusicInputEnvelope.schema';
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationUncheckedCreateNestedManyWithoutMusicInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ParticipationCreateWithoutMusicInputObjectSchema),
          z
            .lazy(() => ParticipationCreateWithoutMusicInputObjectSchema)
            .array(),
          z.lazy(
            () => ParticipationUncheckedCreateWithoutMusicInputObjectSchema,
          ),
          z
            .lazy(
              () => ParticipationUncheckedCreateWithoutMusicInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ParticipationCreateOrConnectWithoutMusicInputObjectSchema,
          ),
          z
            .lazy(
              () => ParticipationCreateOrConnectWithoutMusicInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ParticipationCreateManyMusicInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ParticipationUncheckedCreateNestedManyWithoutMusicInputObjectSchema =
  Schema;
