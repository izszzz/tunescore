import { z } from 'zod';
import { ArtistUpdateWithoutBookmarksInputObjectSchema } from './ArtistUpdateWithoutBookmarksInput.schema';
import { ArtistUncheckedUpdateWithoutBookmarksInputObjectSchema } from './ArtistUncheckedUpdateWithoutBookmarksInput.schema';
import { ArtistCreateWithoutBookmarksInputObjectSchema } from './ArtistCreateWithoutBookmarksInput.schema';
import { ArtistUncheckedCreateWithoutBookmarksInputObjectSchema } from './ArtistUncheckedCreateWithoutBookmarksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpsertWithoutBookmarksInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArtistUpdateWithoutBookmarksInputObjectSchema),
      z.lazy(() => ArtistUncheckedUpdateWithoutBookmarksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutBookmarksInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutBookmarksInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistUpsertWithoutBookmarksInputObjectSchema = Schema;
