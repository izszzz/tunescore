import { z } from 'zod';
import { ParticipationCreateWithoutArtistInputObjectSchema } from './ParticipationCreateWithoutArtistInput.schema';
import { ParticipationUncheckedCreateWithoutArtistInputObjectSchema } from './ParticipationUncheckedCreateWithoutArtistInput.schema';
import { ParticipationCreateOrConnectWithoutArtistInputObjectSchema } from './ParticipationCreateOrConnectWithoutArtistInput.schema';
import { ParticipationCreateManyArtistInputEnvelopeObjectSchema } from './ParticipationCreateManyArtistInputEnvelope.schema';
import { ParticipationWhereUniqueInputObjectSchema } from './ParticipationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationCreateNestedManyWithoutArtistInput> =
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
      createMany: z
        .lazy(() => ParticipationCreateManyArtistInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema),
          z.lazy(() => ParticipationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ParticipationCreateNestedManyWithoutArtistInputObjectSchema =
  Schema;
