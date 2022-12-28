import { z } from 'zod';
import { TagMapCreateWithoutBandInputObjectSchema } from './TagMapCreateWithoutBandInput.schema';
import { TagMapUncheckedCreateWithoutBandInputObjectSchema } from './TagMapUncheckedCreateWithoutBandInput.schema';
import { TagMapCreateOrConnectWithoutBandInputObjectSchema } from './TagMapCreateOrConnectWithoutBandInput.schema';
import { TagMapUpsertWithWhereUniqueWithoutBandInputObjectSchema } from './TagMapUpsertWithWhereUniqueWithoutBandInput.schema';
import { TagMapCreateManyBandInputEnvelopeObjectSchema } from './TagMapCreateManyBandInputEnvelope.schema';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapUpdateWithWhereUniqueWithoutBandInputObjectSchema } from './TagMapUpdateWithWhereUniqueWithoutBandInput.schema';
import { TagMapUpdateManyWithWhereWithoutBandInputObjectSchema } from './TagMapUpdateManyWithWhereWithoutBandInput.schema';
import { TagMapScalarWhereInputObjectSchema } from './TagMapScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUncheckedUpdateManyWithoutBandNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TagMapCreateWithoutBandInputObjectSchema),
          z.lazy(() => TagMapCreateWithoutBandInputObjectSchema).array(),
          z.lazy(() => TagMapUncheckedCreateWithoutBandInputObjectSchema),
          z
            .lazy(() => TagMapUncheckedCreateWithoutBandInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TagMapCreateOrConnectWithoutBandInputObjectSchema),
          z
            .lazy(() => TagMapCreateOrConnectWithoutBandInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => TagMapUpsertWithWhereUniqueWithoutBandInputObjectSchema),
          z
            .lazy(() => TagMapUpsertWithWhereUniqueWithoutBandInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TagMapCreateManyBandInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => TagMapWhereUniqueInputObjectSchema),
          z.lazy(() => TagMapWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TagMapWhereUniqueInputObjectSchema),
          z.lazy(() => TagMapWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TagMapWhereUniqueInputObjectSchema),
          z.lazy(() => TagMapWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TagMapWhereUniqueInputObjectSchema),
          z.lazy(() => TagMapWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => TagMapUpdateWithWhereUniqueWithoutBandInputObjectSchema),
          z
            .lazy(() => TagMapUpdateWithWhereUniqueWithoutBandInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => TagMapUpdateManyWithWhereWithoutBandInputObjectSchema),
          z
            .lazy(() => TagMapUpdateManyWithWhereWithoutBandInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TagMapScalarWhereInputObjectSchema),
          z.lazy(() => TagMapScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TagMapUncheckedUpdateManyWithoutBandNestedInputObjectSchema =
  Schema;
