import { z } from 'zod';
import { BandCreateWithoutBookmarksInputObjectSchema } from './BandCreateWithoutBookmarksInput.schema';
import { BandUncheckedCreateWithoutBookmarksInputObjectSchema } from './BandUncheckedCreateWithoutBookmarksInput.schema';
import { BandCreateOrConnectWithoutBookmarksInputObjectSchema } from './BandCreateOrConnectWithoutBookmarksInput.schema';
import { BandUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema } from './BandUpsertWithWhereUniqueWithoutBookmarksInput.schema';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema } from './BandUpdateWithWhereUniqueWithoutBookmarksInput.schema';
import { BandUpdateManyWithWhereWithoutBookmarksInputObjectSchema } from './BandUpdateManyWithWhereWithoutBookmarksInput.schema';
import { BandScalarWhereInputObjectSchema } from './BandScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpdateManyWithoutBookmarksNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => BandCreateWithoutBookmarksInputObjectSchema),
            z.lazy(() => BandCreateWithoutBookmarksInputObjectSchema).array(),
            z.lazy(() => BandUncheckedCreateWithoutBookmarksInputObjectSchema),
            z
              .lazy(() => BandUncheckedCreateWithoutBookmarksInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => BandCreateOrConnectWithoutBookmarksInputObjectSchema),
            z
              .lazy(() => BandCreateOrConnectWithoutBookmarksInputObjectSchema)
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
              () => BandUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  BandUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema,
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
            z.lazy(() => BandWhereUniqueInputObjectSchema),
            z.lazy(() => BandWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => BandWhereUniqueInputObjectSchema),
            z.lazy(() => BandWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => BandWhereUniqueInputObjectSchema),
            z.lazy(() => BandWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => BandWhereUniqueInputObjectSchema),
            z.lazy(() => BandWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => BandUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  BandUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema,
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
              () => BandUpdateManyWithWhereWithoutBookmarksInputObjectSchema,
            ),
            z
              .lazy(
                () => BandUpdateManyWithWhereWithoutBookmarksInputObjectSchema,
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
            z.lazy(() => BandScalarWhereInputObjectSchema),
            z.lazy(() => BandScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const BandUpdateManyWithoutBookmarksNestedInputObjectSchema = Schema;
