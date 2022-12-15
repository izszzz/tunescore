import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumCreateWithoutBookmarksInputObjectSchema } from './AlbumCreateWithoutBookmarksInput.schema';
import { AlbumUncheckedCreateWithoutBookmarksInputObjectSchema } from './AlbumUncheckedCreateWithoutBookmarksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCreateOrConnectWithoutBookmarksInput> = z
  .object({
    where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AlbumCreateWithoutBookmarksInputObjectSchema),
      z.lazy(() => AlbumUncheckedCreateWithoutBookmarksInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumCreateOrConnectWithoutBookmarksInputObjectSchema = Schema;
