import { z } from 'zod';
import { ArtistCreateWithoutBookmarksInputObjectSchema } from './ArtistCreateWithoutBookmarksInput.schema';
import { ArtistUncheckedCreateWithoutBookmarksInputObjectSchema } from './ArtistUncheckedCreateWithoutBookmarksInput.schema';
import { ArtistCreateOrConnectWithoutBookmarksInputObjectSchema } from './ArtistCreateOrConnectWithoutBookmarksInput.schema';
import { ArtistUpsertWithoutBookmarksInputObjectSchema } from './ArtistUpsertWithoutBookmarksInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutBookmarksInputObjectSchema } from './ArtistUpdateWithoutBookmarksInput.schema';
import { ArtistUncheckedUpdateWithoutBookmarksInputObjectSchema } from './ArtistUncheckedUpdateWithoutBookmarksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateOneWithoutBookmarksNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtistCreateWithoutBookmarksInputObjectSchema),
        z.lazy(() => ArtistUncheckedCreateWithoutBookmarksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ArtistCreateOrConnectWithoutBookmarksInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => ArtistUpsertWithoutBookmarksInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ArtistUpdateWithoutBookmarksInputObjectSchema),
        z.lazy(() => ArtistUncheckedUpdateWithoutBookmarksInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ArtistUpdateOneWithoutBookmarksNestedInputObjectSchema = Schema;
