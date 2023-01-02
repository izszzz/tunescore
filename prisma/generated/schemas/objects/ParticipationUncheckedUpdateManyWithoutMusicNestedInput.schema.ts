import { z } from 'zod';
import { ParticipationCreateWithoutMusicInputObjectSchema } from './ParticipationCreateWithoutMusicInput.schema';
import { ParticipationUncheckedCreateWithoutMusicInputObjectSchema } from './ParticipationUncheckedCreateWithoutMusicInput.schema';
import { ParticipationCreateOrConnectWithoutMusicInputObjectSchema } from './ParticipationCreateOrConnectWithoutMusicInput.schema';
import { ParticipationUpsertWithWhereUniqueWithoutMusicInputObjectSchema } from './ParticipationUpsertWithWhereUniqueWithoutMusicInput.schema';
import { ParticipationCreateManyMusicInputEnvelopeObjectSchema } from './ParticipationCreateManyMusicInputEnvelope.schema';
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema';
import { ParticipationUpdateWithWhereUniqueWithoutMusicInputObjectSchema } from './ParticipationUpdateWithWhereUniqueWithoutMusicInput.schema';
import { ParticipationUpdateManyWithWhereWithoutMusicInputObjectSchema } from './ParticipationUpdateManyWithWhereWithoutMusicInput.schema';
import { ParticipationScalarWhereInputObjectSchema } from './ParticipationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationUncheckedUpdateManyWithoutMusicNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ParticipationUpsertWithWhereUniqueWithoutMusicInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ParticipationUpsertWithWhereUniqueWithoutMusicInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ParticipationCreateManyMusicInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ParticipationUpdateWithWhereUniqueWithoutMusicInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ParticipationUpdateWithWhereUniqueWithoutMusicInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ParticipationUpdateManyWithWhereWithoutMusicInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ParticipationUpdateManyWithWhereWithoutMusicInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ParticipationScalarWhereInputObjectSchema),
          z.lazy(() => ParticipationScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ParticipationUncheckedUpdateManyWithoutMusicNestedInputObjectSchema =
  Schema;
