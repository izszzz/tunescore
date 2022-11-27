import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistCreateWithoutBookmarksInputObjectSchema } from './ArtistCreateWithoutBookmarksInput.schema';
import { ArtistUncheckedCreateWithoutBookmarksInputObjectSchema } from './ArtistUncheckedCreateWithoutBookmarksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutBookmarksInput> = z
  .object({
    where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutBookmarksInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutBookmarksInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistCreateOrConnectWithoutBookmarksInputObjectSchema = Schema;
