import { z } from 'zod';
import { AlbumCreateWithoutArtistsInputObjectSchema } from './AlbumCreateWithoutArtistsInput.schema';
import { AlbumUncheckedCreateWithoutArtistsInputObjectSchema } from './AlbumUncheckedCreateWithoutArtistsInput.schema';
import { AlbumCreateOrConnectWithoutArtistsInputObjectSchema } from './AlbumCreateOrConnectWithoutArtistsInput.schema';
import { AlbumUpsertWithWhereUniqueWithoutArtistsInputObjectSchema } from './AlbumUpsertWithWhereUniqueWithoutArtistsInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumUpdateWithWhereUniqueWithoutArtistsInputObjectSchema } from './AlbumUpdateWithWhereUniqueWithoutArtistsInput.schema';
import { AlbumUpdateManyWithWhereWithoutArtistsInputObjectSchema } from './AlbumUpdateManyWithWhereWithoutArtistsInput.schema';
import { AlbumScalarWhereInputObjectSchema } from './AlbumScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUncheckedUpdateManyWithoutArtistsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AlbumCreateWithoutArtistsInputObjectSchema),
          z.lazy(() => AlbumCreateWithoutArtistsInputObjectSchema).array(),
          z.lazy(() => AlbumUncheckedCreateWithoutArtistsInputObjectSchema),
          z
            .lazy(() => AlbumUncheckedCreateWithoutArtistsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AlbumCreateOrConnectWithoutArtistsInputObjectSchema),
          z
            .lazy(() => AlbumCreateOrConnectWithoutArtistsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => AlbumUpsertWithWhereUniqueWithoutArtistsInputObjectSchema,
          ),
          z
            .lazy(
              () => AlbumUpsertWithWhereUniqueWithoutArtistsInputObjectSchema,
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
            () => AlbumUpdateWithWhereUniqueWithoutArtistsInputObjectSchema,
          ),
          z
            .lazy(
              () => AlbumUpdateWithWhereUniqueWithoutArtistsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => AlbumUpdateManyWithWhereWithoutArtistsInputObjectSchema),
          z
            .lazy(() => AlbumUpdateManyWithWhereWithoutArtistsInputObjectSchema)
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

export const AlbumUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema =
  Schema;
