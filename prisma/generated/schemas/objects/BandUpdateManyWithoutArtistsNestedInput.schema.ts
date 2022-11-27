import { z } from 'zod';
import { BandCreateWithoutArtistsInputObjectSchema } from './BandCreateWithoutArtistsInput.schema';
import { BandUncheckedCreateWithoutArtistsInputObjectSchema } from './BandUncheckedCreateWithoutArtistsInput.schema';
import { BandCreateOrConnectWithoutArtistsInputObjectSchema } from './BandCreateOrConnectWithoutArtistsInput.schema';
import { BandUpsertWithWhereUniqueWithoutArtistsInputObjectSchema } from './BandUpsertWithWhereUniqueWithoutArtistsInput.schema';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandUpdateWithWhereUniqueWithoutArtistsInputObjectSchema } from './BandUpdateWithWhereUniqueWithoutArtistsInput.schema';
import { BandUpdateManyWithWhereWithoutArtistsInputObjectSchema } from './BandUpdateManyWithWhereWithoutArtistsInput.schema';
import { BandScalarWhereInputObjectSchema } from './BandScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpdateManyWithoutArtistsNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => BandCreateWithoutArtistsInputObjectSchema),
            z.lazy(() => BandCreateWithoutArtistsInputObjectSchema).array(),
            z.lazy(() => BandUncheckedCreateWithoutArtistsInputObjectSchema),
            z
              .lazy(() => BandUncheckedCreateWithoutArtistsInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => BandCreateOrConnectWithoutArtistsInputObjectSchema),
            z
              .lazy(() => BandCreateOrConnectWithoutArtistsInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .union([
            z.lazy(
              () => BandUpsertWithWhereUniqueWithoutArtistsInputObjectSchema,
            ),
            z
              .lazy(
                () => BandUpsertWithWhereUniqueWithoutArtistsInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        set: z
          .union([
            z.lazy(() => BandWhereUniqueInputObjectSchema),
            z.lazy(() => BandWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => BandWhereUniqueInputObjectSchema),
            z.lazy(() => BandWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => BandWhereUniqueInputObjectSchema),
            z.lazy(() => BandWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => BandWhereUniqueInputObjectSchema),
            z.lazy(() => BandWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => BandUpdateWithWhereUniqueWithoutArtistsInputObjectSchema,
            ),
            z
              .lazy(
                () => BandUpdateWithWhereUniqueWithoutArtistsInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        updateMany: z
          .union([
            z.lazy(
              () => BandUpdateManyWithWhereWithoutArtistsInputObjectSchema,
            ),
            z
              .lazy(
                () => BandUpdateManyWithWhereWithoutArtistsInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        deleteMany: z
          .union([
            z.lazy(() => BandScalarWhereInputObjectSchema),
            z.lazy(() => BandScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const BandUpdateManyWithoutArtistsNestedInputObjectSchema = Schema;
