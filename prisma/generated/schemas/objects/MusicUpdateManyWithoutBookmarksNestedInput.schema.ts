import { z } from 'zod';
import { MusicCreateWithoutBookmarksInputObjectSchema } from './MusicCreateWithoutBookmarksInput.schema';
import { MusicUncheckedCreateWithoutBookmarksInputObjectSchema } from './MusicUncheckedCreateWithoutBookmarksInput.schema';
import { MusicCreateOrConnectWithoutBookmarksInputObjectSchema } from './MusicCreateOrConnectWithoutBookmarksInput.schema';
import { MusicUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema } from './MusicUpsertWithWhereUniqueWithoutBookmarksInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema } from './MusicUpdateWithWhereUniqueWithoutBookmarksInput.schema';
import { MusicUpdateManyWithWhereWithoutBookmarksInputObjectSchema } from './MusicUpdateManyWithWhereWithoutBookmarksInput.schema';
import { MusicScalarWhereInputObjectSchema } from './MusicScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateManyWithoutBookmarksNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => MusicCreateWithoutBookmarksInputObjectSchema),
            z.lazy(() => MusicCreateWithoutBookmarksInputObjectSchema).array(),
            z.lazy(() => MusicUncheckedCreateWithoutBookmarksInputObjectSchema),
            z
              .lazy(() => MusicUncheckedCreateWithoutBookmarksInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => MusicCreateOrConnectWithoutBookmarksInputObjectSchema),
            z
              .lazy(() => MusicCreateOrConnectWithoutBookmarksInputObjectSchema)
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
              () => MusicUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MusicUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema,
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
            z.lazy(() => MusicWhereUniqueInputObjectSchema),
            z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => MusicWhereUniqueInputObjectSchema),
            z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => MusicWhereUniqueInputObjectSchema),
            z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => MusicWhereUniqueInputObjectSchema),
            z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => MusicUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MusicUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema,
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
              () => MusicUpdateManyWithWhereWithoutBookmarksInputObjectSchema,
            ),
            z
              .lazy(
                () => MusicUpdateManyWithWhereWithoutBookmarksInputObjectSchema,
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
            z.lazy(() => MusicScalarWhereInputObjectSchema),
            z.lazy(() => MusicScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const MusicUpdateManyWithoutBookmarksNestedInputObjectSchema = Schema;
