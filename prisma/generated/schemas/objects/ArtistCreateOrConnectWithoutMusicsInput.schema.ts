import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistCreateWithoutMusicsInputObjectSchema } from './ArtistCreateWithoutMusicsInput.schema';
import { ArtistUncheckedCreateWithoutMusicsInputObjectSchema } from './ArtistUncheckedCreateWithoutMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutMusicsInput> = z
  .object({
    where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutMusicsInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutMusicsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistCreateOrConnectWithoutMusicsInputObjectSchema = Schema;
