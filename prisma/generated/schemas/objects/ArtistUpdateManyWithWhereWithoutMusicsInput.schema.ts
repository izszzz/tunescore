import { z } from 'zod';
import { ArtistScalarWhereInputObjectSchema } from './ArtistScalarWhereInput.schema';
import { ArtistUpdateManyMutationInputObjectSchema } from './ArtistUpdateManyMutationInput.schema';
import { ArtistUncheckedUpdateManyWithoutArtistsInputObjectSchema } from './ArtistUncheckedUpdateManyWithoutArtistsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateManyWithWhereWithoutMusicsInput> = z
  .object({
    where: z.lazy(() => ArtistScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtistUpdateManyMutationInputObjectSchema),
      z.lazy(() => ArtistUncheckedUpdateManyWithoutArtistsInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistUpdateManyWithWhereWithoutMusicsInputObjectSchema = Schema;
