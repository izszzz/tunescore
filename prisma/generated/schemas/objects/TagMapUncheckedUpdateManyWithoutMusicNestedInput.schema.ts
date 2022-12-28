import { z } from 'zod';
import { TagMapCreateWithoutMusicInputObjectSchema } from './TagMapCreateWithoutMusicInput.schema';
import { TagMapUncheckedCreateWithoutMusicInputObjectSchema } from './TagMapUncheckedCreateWithoutMusicInput.schema';
import { TagMapCreateOrConnectWithoutMusicInputObjectSchema } from './TagMapCreateOrConnectWithoutMusicInput.schema';
import { TagMapUpsertWithWhereUniqueWithoutMusicInputObjectSchema } from './TagMapUpsertWithWhereUniqueWithoutMusicInput.schema';
import { TagMapCreateManyMusicInputEnvelopeObjectSchema } from './TagMapCreateManyMusicInputEnvelope.schema';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapUpdateWithWhereUniqueWithoutMusicInputObjectSchema } from './TagMapUpdateWithWhereUniqueWithoutMusicInput.schema';
import { TagMapUpdateManyWithWhereWithoutMusicInputObjectSchema } from './TagMapUpdateManyWithWhereWithoutMusicInput.schema';
import { TagMapScalarWhereInputObjectSchema } from './TagMapScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUncheckedUpdateManyWithoutMusicNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TagMapCreateWithoutMusicInputObjectSchema),
          z.lazy(() => TagMapCreateWithoutMusicInputObjectSchema).array(),
          z.lazy(() => TagMapUncheckedCreateWithoutMusicInputObjectSchema),
          z
            .lazy(() => TagMapUncheckedCreateWithoutMusicInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TagMapCreateOrConnectWithoutMusicInputObjectSchema),
          z
            .lazy(() => TagMapCreateOrConnectWithoutMusicInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => TagMapUpsertWithWhereUniqueWithoutMusicInputObjectSchema,
          ),
          z
            .lazy(
              () => TagMapUpsertWithWhereUniqueWithoutMusicInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TagMapCreateManyMusicInputEnvelopeObjectSchema)
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
          z.lazy(
            () => TagMapUpdateWithWhereUniqueWithoutMusicInputObjectSchema,
          ),
          z
            .lazy(
              () => TagMapUpdateWithWhereUniqueWithoutMusicInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => TagMapUpdateManyWithWhereWithoutMusicInputObjectSchema),
          z
            .lazy(() => TagMapUpdateManyWithWhereWithoutMusicInputObjectSchema)
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

export const TagMapUncheckedUpdateManyWithoutMusicNestedInputObjectSchema =
  Schema;
