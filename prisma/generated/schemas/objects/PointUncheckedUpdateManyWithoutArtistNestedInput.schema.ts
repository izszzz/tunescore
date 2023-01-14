import { z } from 'zod';
import { PointCreateWithoutArtistInputObjectSchema } from './PointCreateWithoutArtistInput.schema';
import { PointUncheckedCreateWithoutArtistInputObjectSchema } from './PointUncheckedCreateWithoutArtistInput.schema';
import { PointCreateOrConnectWithoutArtistInputObjectSchema } from './PointCreateOrConnectWithoutArtistInput.schema';
import { PointUpsertWithWhereUniqueWithoutArtistInputObjectSchema } from './PointUpsertWithWhereUniqueWithoutArtistInput.schema';
import { PointCreateManyArtistInputEnvelopeObjectSchema } from './PointCreateManyArtistInputEnvelope.schema';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithWhereUniqueWithoutArtistInputObjectSchema } from './PointUpdateWithWhereUniqueWithoutArtistInput.schema';
import { PointUpdateManyWithWhereWithoutArtistInputObjectSchema } from './PointUpdateManyWithWhereWithoutArtistInput.schema';
import { PointScalarWhereInputObjectSchema } from './PointScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUncheckedUpdateManyWithoutArtistNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PointCreateWithoutArtistInputObjectSchema),
          z.lazy(() => PointCreateWithoutArtistInputObjectSchema).array(),
          z.lazy(() => PointUncheckedCreateWithoutArtistInputObjectSchema),
          z
            .lazy(() => PointUncheckedCreateWithoutArtistInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PointCreateOrConnectWithoutArtistInputObjectSchema),
          z
            .lazy(() => PointCreateOrConnectWithoutArtistInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => PointUpsertWithWhereUniqueWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () => PointUpsertWithWhereUniqueWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PointCreateManyArtistInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PointWhereUniqueInputObjectSchema),
          z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PointWhereUniqueInputObjectSchema),
          z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PointWhereUniqueInputObjectSchema),
          z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PointWhereUniqueInputObjectSchema),
          z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => PointUpdateWithWhereUniqueWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () => PointUpdateWithWhereUniqueWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => PointUpdateManyWithWhereWithoutArtistInputObjectSchema),
          z
            .lazy(() => PointUpdateManyWithWhereWithoutArtistInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PointScalarWhereInputObjectSchema),
          z.lazy(() => PointScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PointUncheckedUpdateManyWithoutArtistNestedInputObjectSchema =
  Schema;
