import { z } from 'zod';
import { ArtistScalarWhereInputObjectSchema } from './ArtistScalarWhereInput.schema';
import { ArtistUpdateManyMutationInputObjectSchema } from './ArtistUpdateManyMutationInput.schema';
import { ArtistUncheckedUpdateManyWithoutLyristsInputObjectSchema } from './ArtistUncheckedUpdateManyWithoutLyristsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateManyWithWhereWithoutWrittenMusicsInput> =
  z
    .object({
      where: z.lazy(() => ArtistScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ArtistUpdateManyMutationInputObjectSchema),
        z.lazy(() => ArtistUncheckedUpdateManyWithoutLyristsInputObjectSchema),
      ]),
    })
    .strict();

export const ArtistUpdateManyWithWhereWithoutWrittenMusicsInputObjectSchema =
  Schema;
