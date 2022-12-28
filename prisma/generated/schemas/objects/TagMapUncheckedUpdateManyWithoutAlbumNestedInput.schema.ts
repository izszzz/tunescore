import { z } from 'zod';
import { TagMapCreateWithoutAlbumInputObjectSchema } from './TagMapCreateWithoutAlbumInput.schema';
import { TagMapUncheckedCreateWithoutAlbumInputObjectSchema } from './TagMapUncheckedCreateWithoutAlbumInput.schema';
import { TagMapCreateOrConnectWithoutAlbumInputObjectSchema } from './TagMapCreateOrConnectWithoutAlbumInput.schema';
import { TagMapUpsertWithWhereUniqueWithoutAlbumInputObjectSchema } from './TagMapUpsertWithWhereUniqueWithoutAlbumInput.schema';
import { TagMapCreateManyAlbumInputEnvelopeObjectSchema } from './TagMapCreateManyAlbumInputEnvelope.schema';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapUpdateWithWhereUniqueWithoutAlbumInputObjectSchema } from './TagMapUpdateWithWhereUniqueWithoutAlbumInput.schema';
import { TagMapUpdateManyWithWhereWithoutAlbumInputObjectSchema } from './TagMapUpdateManyWithWhereWithoutAlbumInput.schema';
import { TagMapScalarWhereInputObjectSchema } from './TagMapScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUncheckedUpdateManyWithoutAlbumNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TagMapCreateWithoutAlbumInputObjectSchema),
          z.lazy(() => TagMapCreateWithoutAlbumInputObjectSchema).array(),
          z.lazy(() => TagMapUncheckedCreateWithoutAlbumInputObjectSchema),
          z
            .lazy(() => TagMapUncheckedCreateWithoutAlbumInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TagMapCreateOrConnectWithoutAlbumInputObjectSchema),
          z
            .lazy(() => TagMapCreateOrConnectWithoutAlbumInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => TagMapUpsertWithWhereUniqueWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () => TagMapUpsertWithWhereUniqueWithoutAlbumInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TagMapCreateManyAlbumInputEnvelopeObjectSchema)
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
            () => TagMapUpdateWithWhereUniqueWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () => TagMapUpdateWithWhereUniqueWithoutAlbumInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => TagMapUpdateManyWithWhereWithoutAlbumInputObjectSchema),
          z
            .lazy(() => TagMapUpdateManyWithWhereWithoutAlbumInputObjectSchema)
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

export const TagMapUncheckedUpdateManyWithoutAlbumNestedInputObjectSchema =
  Schema;
