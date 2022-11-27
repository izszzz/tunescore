import { z } from 'zod';
import { MusicCreateWithoutArtistsInputObjectSchema } from './MusicCreateWithoutArtistsInput.schema';
import { MusicUncheckedCreateWithoutArtistsInputObjectSchema } from './MusicUncheckedCreateWithoutArtistsInput.schema';
import { MusicCreateOrConnectWithoutArtistsInputObjectSchema } from './MusicCreateOrConnectWithoutArtistsInput.schema';
import { MusicUpsertWithWhereUniqueWithoutArtistsInputObjectSchema } from './MusicUpsertWithWhereUniqueWithoutArtistsInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithWhereUniqueWithoutArtistsInputObjectSchema } from './MusicUpdateWithWhereUniqueWithoutArtistsInput.schema';
import { MusicUpdateManyWithWhereWithoutArtistsInputObjectSchema } from './MusicUpdateManyWithWhereWithoutArtistsInput.schema';
import { MusicScalarWhereInputObjectSchema } from './MusicScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateManyWithoutArtistsNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => MusicCreateWithoutArtistsInputObjectSchema),
            z.lazy(() => MusicCreateWithoutArtistsInputObjectSchema).array(),
            z.lazy(() => MusicUncheckedCreateWithoutArtistsInputObjectSchema),
            z
              .lazy(() => MusicUncheckedCreateWithoutArtistsInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => MusicCreateOrConnectWithoutArtistsInputObjectSchema),
            z
              .lazy(() => MusicCreateOrConnectWithoutArtistsInputObjectSchema)
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
              () => MusicUpsertWithWhereUniqueWithoutArtistsInputObjectSchema,
            ),
            z
              .lazy(
                () => MusicUpsertWithWhereUniqueWithoutArtistsInputObjectSchema,
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
            z.lazy(() => MusicWhereUniqueInputObjectSchema),
            z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => MusicWhereUniqueInputObjectSchema),
            z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => MusicWhereUniqueInputObjectSchema),
            z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => MusicWhereUniqueInputObjectSchema),
            z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => MusicUpdateWithWhereUniqueWithoutArtistsInputObjectSchema,
            ),
            z
              .lazy(
                () => MusicUpdateWithWhereUniqueWithoutArtistsInputObjectSchema,
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
              () => MusicUpdateManyWithWhereWithoutArtistsInputObjectSchema,
            ),
            z
              .lazy(
                () => MusicUpdateManyWithWhereWithoutArtistsInputObjectSchema,
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
            z.lazy(() => MusicScalarWhereInputObjectSchema),
            z.lazy(() => MusicScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const MusicUpdateManyWithoutArtistsNestedInputObjectSchema = Schema;
