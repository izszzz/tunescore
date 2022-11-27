import { z } from 'zod';
import { MusicCreateWithoutLyristsInputObjectSchema } from './MusicCreateWithoutLyristsInput.schema';
import { MusicUncheckedCreateWithoutLyristsInputObjectSchema } from './MusicUncheckedCreateWithoutLyristsInput.schema';
import { MusicCreateOrConnectWithoutLyristsInputObjectSchema } from './MusicCreateOrConnectWithoutLyristsInput.schema';
import { MusicUpsertWithWhereUniqueWithoutLyristsInputObjectSchema } from './MusicUpsertWithWhereUniqueWithoutLyristsInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithWhereUniqueWithoutLyristsInputObjectSchema } from './MusicUpdateWithWhereUniqueWithoutLyristsInput.schema';
import { MusicUpdateManyWithWhereWithoutLyristsInputObjectSchema } from './MusicUpdateManyWithWhereWithoutLyristsInput.schema';
import { MusicScalarWhereInputObjectSchema } from './MusicScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUncheckedUpdateManyWithoutLyristsNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => MusicCreateWithoutLyristsInputObjectSchema),
            z.lazy(() => MusicCreateWithoutLyristsInputObjectSchema).array(),
            z.lazy(() => MusicUncheckedCreateWithoutLyristsInputObjectSchema),
            z
              .lazy(() => MusicUncheckedCreateWithoutLyristsInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => MusicCreateOrConnectWithoutLyristsInputObjectSchema),
            z
              .lazy(() => MusicCreateOrConnectWithoutLyristsInputObjectSchema)
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
              () => MusicUpsertWithWhereUniqueWithoutLyristsInputObjectSchema,
            ),
            z
              .lazy(
                () => MusicUpsertWithWhereUniqueWithoutLyristsInputObjectSchema,
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
              () => MusicUpdateWithWhereUniqueWithoutLyristsInputObjectSchema,
            ),
            z
              .lazy(
                () => MusicUpdateWithWhereUniqueWithoutLyristsInputObjectSchema,
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
              () => MusicUpdateManyWithWhereWithoutLyristsInputObjectSchema,
            ),
            z
              .lazy(
                () => MusicUpdateManyWithWhereWithoutLyristsInputObjectSchema,
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

export const MusicUncheckedUpdateManyWithoutLyristsNestedInputObjectSchema =
  Schema;
