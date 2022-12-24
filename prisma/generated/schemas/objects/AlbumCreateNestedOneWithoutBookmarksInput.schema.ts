import { z } from 'zod';
import { AlbumCreateWithoutBookmarksInputObjectSchema } from './AlbumCreateWithoutBookmarksInput.schema';
import { AlbumUncheckedCreateWithoutBookmarksInputObjectSchema } from './AlbumUncheckedCreateWithoutBookmarksInput.schema';
import { AlbumCreateOrConnectWithoutBookmarksInputObjectSchema } from './AlbumCreateOrConnectWithoutBookmarksInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCreateNestedOneWithoutBookmarksInput> = z
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
    connect: z.lazy(() => AlbumWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const AlbumCreateNestedOneWithoutBookmarksInputObjectSchema = Schema;
