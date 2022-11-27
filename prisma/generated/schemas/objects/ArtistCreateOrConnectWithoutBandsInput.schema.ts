import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistCreateWithoutBandsInputObjectSchema } from './ArtistCreateWithoutBandsInput.schema';
import { ArtistUncheckedCreateWithoutBandsInputObjectSchema } from './ArtistUncheckedCreateWithoutBandsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutBandsInput> = z
  .object({
    where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutBandsInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutBandsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistCreateOrConnectWithoutBandsInputObjectSchema = Schema;
