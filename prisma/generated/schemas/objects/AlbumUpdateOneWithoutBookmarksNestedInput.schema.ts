import { z } from 'zod';
import { AlbumCreateWithoutBookmarksInputObjectSchema } from './AlbumCreateWithoutBookmarksInput.schema';
import { AlbumUncheckedCreateWithoutBookmarksInputObjectSchema } from './AlbumUncheckedCreateWithoutBookmarksInput.schema';
import { AlbumCreateOrConnectWithoutBookmarksInputObjectSchema } from './AlbumCreateOrConnectWithoutBookmarksInput.schema';
import { AlbumUpsertWithoutBookmarksInputObjectSchema } from './AlbumUpsertWithoutBookmarksInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumUpdateWithoutBookmarksInputObjectSchema } from './AlbumUpdateWithoutBookmarksInput.schema';
import { AlbumUncheckedUpdateWithoutBookmarksInputObjectSchema } from './AlbumUncheckedUpdateWithoutBookmarksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpdateOneWithoutBookmarksNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AlbumCreateWithoutBookmarksInputObjectSchema),
        z.lazy(() => AlbumUncheckedCreateWithoutBookmarksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => AlbumCreateOrConnectWithoutBookmarksInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => AlbumUpsertWithoutBookmarksInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => AlbumWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => AlbumUpdateWithoutBookmarksInputObjectSchema),
        z.lazy(() => AlbumUncheckedUpdateWithoutBookmarksInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const AlbumUpdateOneWithoutBookmarksNestedInputObjectSchema = Schema;
