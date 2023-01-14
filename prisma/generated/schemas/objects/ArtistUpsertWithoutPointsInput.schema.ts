import { z } from 'zod';
import { ArtistUpdateWithoutPointsInputObjectSchema } from './ArtistUpdateWithoutPointsInput.schema';
import { ArtistUncheckedUpdateWithoutPointsInputObjectSchema } from './ArtistUncheckedUpdateWithoutPointsInput.schema';
import { ArtistCreateWithoutPointsInputObjectSchema } from './ArtistCreateWithoutPointsInput.schema';
import { ArtistUncheckedCreateWithoutPointsInputObjectSchema } from './ArtistUncheckedCreateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpsertWithoutPointsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArtistUpdateWithoutPointsInputObjectSchema),
      z.lazy(() => ArtistUncheckedUpdateWithoutPointsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutPointsInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutPointsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistUpsertWithoutPointsInputObjectSchema = Schema;
