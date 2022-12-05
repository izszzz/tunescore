import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistCreateWithoutAlbumsInputObjectSchema } from './ArtistCreateWithoutAlbumsInput.schema';
import { ArtistUncheckedCreateWithoutAlbumsInputObjectSchema } from './ArtistUncheckedCreateWithoutAlbumsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutAlbumsInput> = z
  .object({
    where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutAlbumsInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutAlbumsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistCreateOrConnectWithoutAlbumsInputObjectSchema = Schema;
