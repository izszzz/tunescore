import { z } from 'zod';
import { MusicCreateWithoutBandInputObjectSchema } from './MusicCreateWithoutBandInput.schema';
import { MusicUncheckedCreateWithoutBandInputObjectSchema } from './MusicUncheckedCreateWithoutBandInput.schema';
import { MusicCreateOrConnectWithoutBandInputObjectSchema } from './MusicCreateOrConnectWithoutBandInput.schema';
import { MusicUpsertWithWhereUniqueWithoutBandInputObjectSchema } from './MusicUpsertWithWhereUniqueWithoutBandInput.schema';
import { MusicCreateManyBandInputEnvelopeObjectSchema } from './MusicCreateManyBandInputEnvelope.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithWhereUniqueWithoutBandInputObjectSchema } from './MusicUpdateWithWhereUniqueWithoutBandInput.schema';
import { MusicUpdateManyWithWhereWithoutBandInputObjectSchema } from './MusicUpdateManyWithWhereWithoutBandInput.schema';
import { MusicScalarWhereInputObjectSchema } from './MusicScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateManyWithoutBandNestedInput> = z.union(
  [
    z
      .object({
        create: z
          .union([
            z.lazy(() => MusicCreateWithoutBandInputObjectSchema),
            z.lazy(() => MusicCreateWithoutBandInputObjectSchema).array(),
            z.lazy(() => MusicUncheckedCreateWithoutBandInputObjectSchema),
            z
              .lazy(() => MusicUncheckedCreateWithoutBandInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => MusicCreateOrConnectWithoutBandInputObjectSchema),
            z
              .lazy(() => MusicCreateOrConnectWithoutBandInputObjectSchema)
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
              () => MusicUpsertWithWhereUniqueWithoutBandInputObjectSchema,
            ),
            z
              .lazy(
                () => MusicUpsertWithWhereUniqueWithoutBandInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => MusicCreateManyBandInputEnvelopeObjectSchema)
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
              () => MusicUpdateWithWhereUniqueWithoutBandInputObjectSchema,
            ),
            z
              .lazy(
                () => MusicUpdateWithWhereUniqueWithoutBandInputObjectSchema,
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
            z.lazy(() => MusicUpdateManyWithWhereWithoutBandInputObjectSchema),
            z
              .lazy(() => MusicUpdateManyWithWhereWithoutBandInputObjectSchema)
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
  ],
);

export const MusicUpdateManyWithoutBandNestedInputObjectSchema = Schema;
