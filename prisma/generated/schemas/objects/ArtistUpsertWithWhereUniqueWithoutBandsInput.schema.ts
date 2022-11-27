import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutBandsInputObjectSchema } from './ArtistUpdateWithoutBandsInput.schema';
import { ArtistUncheckedUpdateWithoutBandsInputObjectSchema } from './ArtistUncheckedUpdateWithoutBandsInput.schema';
import { ArtistCreateWithoutBandsInputObjectSchema } from './ArtistCreateWithoutBandsInput.schema';
import { ArtistUncheckedCreateWithoutBandsInputObjectSchema } from './ArtistUncheckedCreateWithoutBandsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpsertWithWhereUniqueWithoutBandsInput> = z
  .object({
    where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ArtistUpdateWithoutBandsInputObjectSchema),
      z.lazy(() => ArtistUncheckedUpdateWithoutBandsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutBandsInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutBandsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistUpsertWithWhereUniqueWithoutBandsInputObjectSchema = Schema;
