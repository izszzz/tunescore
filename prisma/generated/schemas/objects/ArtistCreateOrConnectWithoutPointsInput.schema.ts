import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistCreateWithoutPointsInputObjectSchema } from './ArtistCreateWithoutPointsInput.schema';
import { ArtistUncheckedCreateWithoutPointsInputObjectSchema } from './ArtistUncheckedCreateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutPointsInput> = z
  .object({
    where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutPointsInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutPointsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistCreateOrConnectWithoutPointsInputObjectSchema = Schema;
