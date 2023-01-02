import { z } from 'zod';
import { ParticipationCreateWithoutArtistInputObjectSchema } from './ParticipationCreateWithoutArtistInput.schema';
import { ParticipationUncheckedCreateWithoutArtistInputObjectSchema } from './ParticipationUncheckedCreateWithoutArtistInput.schema';
import { ParticipationCreateOrConnectWithoutArtistInputObjectSchema } from './ParticipationCreateOrConnectWithoutArtistInput.schema';
import { ParticipationUpsertWithWhereUniqueWithoutArtistInputObjectSchema } from './ParticipationUpsertWithWhereUniqueWithoutArtistInput.schema';
import { ParticipationCreateManyArtistInputEnvelopeObjectSchema } from './ParticipationCreateManyArtistInputEnvelope.schema';
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema';
import { ParticipationUpdateWithWhereUniqueWithoutArtistInputObjectSchema } from './ParticipationUpdateWithWhereUniqueWithoutArtistInput.schema';
import { ParticipationUpdateManyWithWhereWithoutArtistInputObjectSchema } from './ParticipationUpdateManyWithWhereWithoutArtistInput.schema';
import { ParticipationScalarWhereInputObjectSchema } from './ParticipationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationUpdateManyWithoutArtistNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ParticipationCreateWithoutArtistInputObjectSchema),
          z
            .lazy(() => ParticipationCreateWithoutArtistInputObjectSchema)
            .array(),
          z.lazy(
            () => ParticipationUncheckedCreateWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () => ParticipationUncheckedCreateWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ParticipationCreateOrConnectWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () => ParticipationCreateOrConnectWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ParticipationUpsertWithWhereUniqueWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ParticipationUpsertWithWhereUniqueWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ParticipationCreateManyArtistInputEnvelopeObjectSchema)
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
              ParticipationUpdateWithWhereUniqueWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ParticipationUpdateWithWhereUniqueWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ParticipationUpdateManyWithWhereWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ParticipationUpdateManyWithWhereWithoutArtistInputObjectSchema,
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

export const ParticipationUpdateManyWithoutArtistNestedInputObjectSchema =
  Schema;
