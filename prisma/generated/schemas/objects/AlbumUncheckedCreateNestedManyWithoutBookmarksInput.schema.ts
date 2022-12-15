import { z } from 'zod';
import { AlbumCreateWithoutBookmarksInputObjectSchema } from './AlbumCreateWithoutBookmarksInput.schema';
import { AlbumUncheckedCreateWithoutBookmarksInputObjectSchema } from './AlbumUncheckedCreateWithoutBookmarksInput.schema';
import { AlbumCreateOrConnectWithoutBookmarksInputObjectSchema } from './AlbumCreateOrConnectWithoutBookmarksInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUncheckedCreateNestedManyWithoutBookmarksInput> =
  z
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
      connect: z
        .union([
          z.lazy(() => AlbumWhereUniqueInputObjectSchema),
          z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AlbumUncheckedCreateNestedManyWithoutBookmarksInputObjectSchema =
  Schema;
