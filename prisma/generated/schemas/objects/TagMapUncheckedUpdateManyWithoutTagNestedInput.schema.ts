import { z } from 'zod';
import { TagMapCreateWithoutTagInputObjectSchema } from './TagMapCreateWithoutTagInput.schema';
import { TagMapUncheckedCreateWithoutTagInputObjectSchema } from './TagMapUncheckedCreateWithoutTagInput.schema';
import { TagMapCreateOrConnectWithoutTagInputObjectSchema } from './TagMapCreateOrConnectWithoutTagInput.schema';
import { TagMapUpsertWithWhereUniqueWithoutTagInputObjectSchema } from './TagMapUpsertWithWhereUniqueWithoutTagInput.schema';
import { TagMapCreateManyTagInputEnvelopeObjectSchema } from './TagMapCreateManyTagInputEnvelope.schema';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapUpdateWithWhereUniqueWithoutTagInputObjectSchema } from './TagMapUpdateWithWhereUniqueWithoutTagInput.schema';
import { TagMapUpdateManyWithWhereWithoutTagInputObjectSchema } from './TagMapUpdateManyWithWhereWithoutTagInput.schema';
import { TagMapScalarWhereInputObjectSchema } from './TagMapScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUncheckedUpdateManyWithoutTagNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TagMapCreateWithoutTagInputObjectSchema),
          z.lazy(() => TagMapCreateWithoutTagInputObjectSchema).array(),
          z.lazy(() => TagMapUncheckedCreateWithoutTagInputObjectSchema),
          z
            .lazy(() => TagMapUncheckedCreateWithoutTagInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TagMapCreateOrConnectWithoutTagInputObjectSchema),
          z
            .lazy(() => TagMapCreateOrConnectWithoutTagInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => TagMapUpsertWithWhereUniqueWithoutTagInputObjectSchema),
          z
            .lazy(() => TagMapUpsertWithWhereUniqueWithoutTagInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TagMapCreateManyTagInputEnvelopeObjectSchema)
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
          z.lazy(() => TagMapUpdateWithWhereUniqueWithoutTagInputObjectSchema),
          z
            .lazy(() => TagMapUpdateWithWhereUniqueWithoutTagInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => TagMapUpdateManyWithWhereWithoutTagInputObjectSchema),
          z
            .lazy(() => TagMapUpdateManyWithWhereWithoutTagInputObjectSchema)
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

export const TagMapUncheckedUpdateManyWithoutTagNestedInputObjectSchema =
  Schema;
