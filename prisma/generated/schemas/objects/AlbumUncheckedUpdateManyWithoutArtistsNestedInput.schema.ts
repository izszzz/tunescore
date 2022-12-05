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
  z.union([
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
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => AlbumCreateOrConnectWithoutArtistsInputObjectSchema),
            z
              .lazy(() => AlbumCreateOrConnectWithoutArtistsInputObjectSchema)
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
              () => AlbumUpsertWithWhereUniqueWithoutArtistsInputObjectSchema,
            ),
            z
              .lazy(
                () => AlbumUpsertWithWhereUniqueWithoutArtistsInputObjectSchema,
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
            z.lazy(() => AlbumWhereUniqueInputObjectSchema),
            z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => AlbumWhereUniqueInputObjectSchema),
            z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => AlbumWhereUniqueInputObjectSchema),
            z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => AlbumWhereUniqueInputObjectSchema),
            z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
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
      })
      .strict(),
    z
      .object({
        updateMany: z
          .union([
            z.lazy(
              () => AlbumUpdateManyWithWhereWithoutArtistsInputObjectSchema,
            ),
            z
              .lazy(
                () => AlbumUpdateManyWithWhereWithoutArtistsInputObjectSchema,
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
            z.lazy(() => AlbumScalarWhereInputObjectSchema),
            z.lazy(() => AlbumScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const AlbumUncheckedUpdateManyWithoutArtistsNestedInputObjectSchema =
  Schema;
