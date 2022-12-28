import { z } from 'zod';
import { ArtistUpdateWithoutTagMapsInputObjectSchema } from './ArtistUpdateWithoutTagMapsInput.schema';
import { ArtistUncheckedUpdateWithoutTagMapsInputObjectSchema } from './ArtistUncheckedUpdateWithoutTagMapsInput.schema';
import { ArtistCreateWithoutTagMapsInputObjectSchema } from './ArtistCreateWithoutTagMapsInput.schema';
import { ArtistUncheckedCreateWithoutTagMapsInputObjectSchema } from './ArtistUncheckedCreateWithoutTagMapsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpsertWithoutTagMapsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArtistUpdateWithoutTagMapsInputObjectSchema),
      z.lazy(() => ArtistUncheckedUpdateWithoutTagMapsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutTagMapsInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutTagMapsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistUpsertWithoutTagMapsInputObjectSchema = Schema;
