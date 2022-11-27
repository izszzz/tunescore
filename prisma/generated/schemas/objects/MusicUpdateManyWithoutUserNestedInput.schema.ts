import { z } from 'zod';
import { MusicCreateWithoutUserInputObjectSchema } from './MusicCreateWithoutUserInput.schema';
import { MusicUncheckedCreateWithoutUserInputObjectSchema } from './MusicUncheckedCreateWithoutUserInput.schema';
import { MusicCreateOrConnectWithoutUserInputObjectSchema } from './MusicCreateOrConnectWithoutUserInput.schema';
import { MusicUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './MusicUpsertWithWhereUniqueWithoutUserInput.schema';
import { MusicCreateManyUserInputEnvelopeObjectSchema } from './MusicCreateManyUserInputEnvelope.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './MusicUpdateWithWhereUniqueWithoutUserInput.schema';
import { MusicUpdateManyWithWhereWithoutUserInputObjectSchema } from './MusicUpdateManyWithWhereWithoutUserInput.schema';
import { MusicScalarWhereInputObjectSchema } from './MusicScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateManyWithoutUserNestedInput> = z.union(
  [
    z
      .object({
        create: z
          .union([
            z.lazy(() => MusicCreateWithoutUserInputObjectSchema),
            z.lazy(() => MusicCreateWithoutUserInputObjectSchema).array(),
            z.lazy(() => MusicUncheckedCreateWithoutUserInputObjectSchema),
            z
              .lazy(() => MusicUncheckedCreateWithoutUserInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => MusicCreateOrConnectWithoutUserInputObjectSchema),
            z
              .lazy(() => MusicCreateOrConnectWithoutUserInputObjectSchema)
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
              () => MusicUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            ),
            z
              .lazy(
                () => MusicUpsertWithWhereUniqueWithoutUserInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => MusicCreateManyUserInputEnvelopeObjectSchema)
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
              () => MusicUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            ),
            z
              .lazy(
                () => MusicUpdateWithWhereUniqueWithoutUserInputObjectSchema,
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
            z.lazy(() => MusicUpdateManyWithWhereWithoutUserInputObjectSchema),
            z
              .lazy(() => MusicUpdateManyWithWhereWithoutUserInputObjectSchema)
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

export const MusicUpdateManyWithoutUserNestedInputObjectSchema = Schema;
