import { z } from 'zod';
import { PullCreateWithoutMusicInputObjectSchema } from './PullCreateWithoutMusicInput.schema';
import { PullUncheckedCreateWithoutMusicInputObjectSchema } from './PullUncheckedCreateWithoutMusicInput.schema';
import { PullCreateOrConnectWithoutMusicInputObjectSchema } from './PullCreateOrConnectWithoutMusicInput.schema';
import { PullUpsertWithWhereUniqueWithoutMusicInputObjectSchema } from './PullUpsertWithWhereUniqueWithoutMusicInput.schema';
import { PullCreateManyMusicInputEnvelopeObjectSchema } from './PullCreateManyMusicInputEnvelope.schema';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';
import { PullUpdateWithWhereUniqueWithoutMusicInputObjectSchema } from './PullUpdateWithWhereUniqueWithoutMusicInput.schema';
import { PullUpdateManyWithWhereWithoutMusicInputObjectSchema } from './PullUpdateManyWithWhereWithoutMusicInput.schema';
import { PullScalarWhereInputObjectSchema } from './PullScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUpdateManyWithoutMusicNestedInput> = z.union(
  [
    z
      .object({
        create: z
          .union([
            z.lazy(() => PullCreateWithoutMusicInputObjectSchema),
            z.lazy(() => PullCreateWithoutMusicInputObjectSchema).array(),
            z.lazy(() => PullUncheckedCreateWithoutMusicInputObjectSchema),
            z
              .lazy(() => PullUncheckedCreateWithoutMusicInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => PullCreateOrConnectWithoutMusicInputObjectSchema),
            z
              .lazy(() => PullCreateOrConnectWithoutMusicInputObjectSchema)
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
              () => PullUpsertWithWhereUniqueWithoutMusicInputObjectSchema,
            ),
            z
              .lazy(
                () => PullUpsertWithWhereUniqueWithoutMusicInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => PullCreateManyMusicInputEnvelopeObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        set: z
          .union([
            z.lazy(() => PullWhereUniqueInputObjectSchema),
            z.lazy(() => PullWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => PullWhereUniqueInputObjectSchema),
            z.lazy(() => PullWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => PullWhereUniqueInputObjectSchema),
            z.lazy(() => PullWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => PullWhereUniqueInputObjectSchema),
            z.lazy(() => PullWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => PullUpdateWithWhereUniqueWithoutMusicInputObjectSchema,
            ),
            z
              .lazy(
                () => PullUpdateWithWhereUniqueWithoutMusicInputObjectSchema,
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
            z.lazy(() => PullUpdateManyWithWhereWithoutMusicInputObjectSchema),
            z
              .lazy(() => PullUpdateManyWithWhereWithoutMusicInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        deleteMany: z
          .union([
            z.lazy(() => PullScalarWhereInputObjectSchema),
            z.lazy(() => PullScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ],
);

export const PullUpdateManyWithoutMusicNestedInputObjectSchema = Schema;
