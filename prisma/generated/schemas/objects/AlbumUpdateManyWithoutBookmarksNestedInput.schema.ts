import { z } from 'zod';
import { AlbumCreateWithoutBookmarksInputObjectSchema } from './AlbumCreateWithoutBookmarksInput.schema';
import { AlbumUncheckedCreateWithoutBookmarksInputObjectSchema } from './AlbumUncheckedCreateWithoutBookmarksInput.schema';
import { AlbumCreateOrConnectWithoutBookmarksInputObjectSchema } from './AlbumCreateOrConnectWithoutBookmarksInput.schema';
import { AlbumUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema } from './AlbumUpsertWithWhereUniqueWithoutBookmarksInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema } from './AlbumUpdateWithWhereUniqueWithoutBookmarksInput.schema';
import { AlbumUpdateManyWithWhereWithoutBookmarksInputObjectSchema } from './AlbumUpdateManyWithWhereWithoutBookmarksInput.schema';
import { AlbumScalarWhereInputObjectSchema } from './AlbumScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpdateManyWithoutBookmarksNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AlbumCreateWithoutBookmarksInputObjectSchema),
        z.lazy(() => AlbumCreateWithoutBookmarksInputObjectSchema).array(),
        z.lazy(() => AlbumUncheckedCreateWithoutBookmarksInputObjectSchema),
        z
          .lazy(() => AlbumUncheckedCreateWithoutBookmarksInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => AlbumCreateOrConnectWithoutBookmarksInputObjectSchema),
        z
          .lazy(() => AlbumCreateOrConnectWithoutBookmarksInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => AlbumUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema,
        ),
        z
          .lazy(
            () => AlbumUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema,
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
          () => AlbumUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema,
        ),
        z
          .lazy(
            () => AlbumUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => AlbumUpdateManyWithWhereWithoutBookmarksInputObjectSchema),
        z
          .lazy(() => AlbumUpdateManyWithWhereWithoutBookmarksInputObjectSchema)
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

export const AlbumUpdateManyWithoutBookmarksNestedInputObjectSchema = Schema;
