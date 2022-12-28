import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistCreateWithoutTagMapsInputObjectSchema } from './ArtistCreateWithoutTagMapsInput.schema';
import { ArtistUncheckedCreateWithoutTagMapsInputObjectSchema } from './ArtistUncheckedCreateWithoutTagMapsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutTagMapsInput> = z
  .object({
    where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutTagMapsInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutTagMapsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistCreateOrConnectWithoutTagMapsInputObjectSchema = Schema;
