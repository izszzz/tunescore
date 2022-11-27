import { z } from 'zod';
import { ArtistScalarWhereInputObjectSchema } from './ArtistScalarWhereInput.schema';
import { ArtistUpdateManyMutationInputObjectSchema } from './ArtistUpdateManyMutationInput.schema';
import { ArtistUncheckedUpdateManyWithoutBookmarkArtistsInputObjectSchema } from './ArtistUncheckedUpdateManyWithoutBookmarkArtistsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateManyWithWhereWithoutBookmarksInput> =
  z
    .object({
      where: z.lazy(() => ArtistScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ArtistUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ArtistUncheckedUpdateManyWithoutBookmarkArtistsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistUpdateManyWithWhereWithoutBookmarksInputObjectSchema =
  Schema;
