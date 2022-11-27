import { z } from 'zod';
import { ArtistCreateWithoutWrittenMusicsInputObjectSchema } from './ArtistCreateWithoutWrittenMusicsInput.schema';
import { ArtistUncheckedCreateWithoutWrittenMusicsInputObjectSchema } from './ArtistUncheckedCreateWithoutWrittenMusicsInput.schema';
import { ArtistCreateOrConnectWithoutWrittenMusicsInputObjectSchema } from './ArtistCreateOrConnectWithoutWrittenMusicsInput.schema';
import { ArtistUpsertWithWhereUniqueWithoutWrittenMusicsInputObjectSchema } from './ArtistUpsertWithWhereUniqueWithoutWrittenMusicsInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithWhereUniqueWithoutWrittenMusicsInputObjectSchema } from './ArtistUpdateWithWhereUniqueWithoutWrittenMusicsInput.schema';
import { ArtistUpdateManyWithWhereWithoutWrittenMusicsInputObjectSchema } from './ArtistUpdateManyWithWhereWithoutWrittenMusicsInput.schema';
import { ArtistScalarWhereInputObjectSchema } from './ArtistScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUncheckedUpdateManyWithoutWrittenMusicsNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => ArtistCreateWithoutWrittenMusicsInputObjectSchema),
            z
              .lazy(() => ArtistCreateWithoutWrittenMusicsInputObjectSchema)
              .array(),
            z.lazy(
              () => ArtistUncheckedCreateWithoutWrittenMusicsInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  ArtistUncheckedCreateWithoutWrittenMusicsInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(
              () => ArtistCreateOrConnectWithoutWrittenMusicsInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  ArtistCreateOrConnectWithoutWrittenMusicsInputObjectSchema,
              )
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
              () =>
                ArtistUpsertWithWhereUniqueWithoutWrittenMusicsInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  ArtistUpsertWithWhereUniqueWithoutWrittenMusicsInputObjectSchema,
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
            z.lazy(() => ArtistWhereUniqueInputObjectSchema),
            z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => ArtistWhereUniqueInputObjectSchema),
            z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => ArtistWhereUniqueInputObjectSchema),
            z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => ArtistWhereUniqueInputObjectSchema),
            z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () =>
                ArtistUpdateWithWhereUniqueWithoutWrittenMusicsInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  ArtistUpdateWithWhereUniqueWithoutWrittenMusicsInputObjectSchema,
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
              () =>
                ArtistUpdateManyWithWhereWithoutWrittenMusicsInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  ArtistUpdateManyWithWhereWithoutWrittenMusicsInputObjectSchema,
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
            z.lazy(() => ArtistScalarWhereInputObjectSchema),
            z.lazy(() => ArtistScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const ArtistUncheckedUpdateManyWithoutWrittenMusicsNestedInputObjectSchema =
  Schema;
