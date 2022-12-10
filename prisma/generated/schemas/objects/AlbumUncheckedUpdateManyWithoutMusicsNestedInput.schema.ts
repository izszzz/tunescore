import { z } from 'zod';
import { AlbumCreateWithoutMusicsInputObjectSchema } from './AlbumCreateWithoutMusicsInput.schema';
import { AlbumUncheckedCreateWithoutMusicsInputObjectSchema } from './AlbumUncheckedCreateWithoutMusicsInput.schema';
import { AlbumCreateOrConnectWithoutMusicsInputObjectSchema } from './AlbumCreateOrConnectWithoutMusicsInput.schema';
import { AlbumUpsertWithWhereUniqueWithoutMusicsInputObjectSchema } from './AlbumUpsertWithWhereUniqueWithoutMusicsInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumUpdateWithWhereUniqueWithoutMusicsInputObjectSchema } from './AlbumUpdateWithWhereUniqueWithoutMusicsInput.schema';
import { AlbumUpdateManyWithWhereWithoutMusicsInputObjectSchema } from './AlbumUpdateManyWithWhereWithoutMusicsInput.schema';
import { AlbumScalarWhereInputObjectSchema } from './AlbumScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUncheckedUpdateManyWithoutMusicsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AlbumCreateWithoutMusicsInputObjectSchema),
          z.lazy(() => AlbumCreateWithoutMusicsInputObjectSchema).array(),
          z.lazy(() => AlbumUncheckedCreateWithoutMusicsInputObjectSchema),
          z
            .lazy(() => AlbumUncheckedCreateWithoutMusicsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AlbumCreateOrConnectWithoutMusicsInputObjectSchema),
          z
            .lazy(() => AlbumCreateOrConnectWithoutMusicsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => AlbumUpsertWithWhereUniqueWithoutMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () => AlbumUpsertWithWhereUniqueWithoutMusicsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => AlbumWhereUniqueInputObjectSchema),
          z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => AlbumWhereUniqueInputObjectSchema),
          z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => AlbumWhereUniqueInputObjectSchema),
          z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => AlbumWhereUniqueInputObjectSchema),
          z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => AlbumUpdateWithWhereUniqueWithoutMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () => AlbumUpdateWithWhereUniqueWithoutMusicsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => AlbumUpdateManyWithWhereWithoutMusicsInputObjectSchema),
          z
            .lazy(() => AlbumUpdateManyWithWhereWithoutMusicsInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => AlbumScalarWhereInputObjectSchema),
          z.lazy(() => AlbumScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AlbumUncheckedUpdateManyWithoutMusicsNestedInputObjectSchema =
  Schema;
