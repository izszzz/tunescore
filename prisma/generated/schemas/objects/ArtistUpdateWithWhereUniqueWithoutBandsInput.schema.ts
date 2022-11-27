import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutBandsInputObjectSchema } from './ArtistUpdateWithoutBandsInput.schema';
import { ArtistUncheckedUpdateWithoutBandsInputObjectSchema } from './ArtistUncheckedUpdateWithoutBandsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateWithWhereUniqueWithoutBandsInput> = z
  .object({
    where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtistUpdateWithoutBandsInputObjectSchema),
      z.lazy(() => ArtistUncheckedUpdateWithoutBandsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistUpdateWithWhereUniqueWithoutBandsInputObjectSchema = Schema;
