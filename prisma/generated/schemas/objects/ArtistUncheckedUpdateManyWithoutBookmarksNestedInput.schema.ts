import { z } from 'zod';
import { ArtistCreateWithoutBookmarksInputObjectSchema } from './ArtistCreateWithoutBookmarksInput.schema';
import { ArtistUncheckedCreateWithoutBookmarksInputObjectSchema } from './ArtistUncheckedCreateWithoutBookmarksInput.schema';
import { ArtistCreateOrConnectWithoutBookmarksInputObjectSchema } from './ArtistCreateOrConnectWithoutBookmarksInput.schema';
import { ArtistUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema } from './ArtistUpsertWithWhereUniqueWithoutBookmarksInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema } from './ArtistUpdateWithWhereUniqueWithoutBookmarksInput.schema';
import { ArtistUpdateManyWithWhereWithoutBookmarksInputObjectSchema } from './ArtistUpdateManyWithWhereWithoutBookmarksInput.schema';
import { ArtistScalarWhereInputObjectSchema } from './ArtistScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUncheckedUpdateManyWithoutBookmarksNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => ArtistCreateWithoutBookmarksInputObjectSchema),
            z.lazy(() => ArtistCreateWithoutBookmarksInputObjectSchema).array(),
            z.lazy(
              () => ArtistUncheckedCreateWithoutBookmarksInputObjectSchema,
            ),
            z
              .lazy(
                () => ArtistUncheckedCreateWithoutBookmarksInputObjectSchema,
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
              () => ArtistCreateOrConnectWithoutBookmarksInputObjectSchema,
            ),
            z
              .lazy(
                () => ArtistCreateOrConnectWithoutBookmarksInputObjectSchema,
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
                ArtistUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  ArtistUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema,
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
                ArtistUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  ArtistUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema,
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
              () => ArtistUpdateManyWithWhereWithoutBookmarksInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  ArtistUpdateManyWithWhereWithoutBookmarksInputObjectSchema,
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

export const ArtistUncheckedUpdateManyWithoutBookmarksNestedInputObjectSchema =
  Schema;
