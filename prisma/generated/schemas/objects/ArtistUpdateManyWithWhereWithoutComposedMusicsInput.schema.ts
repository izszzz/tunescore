import { z } from 'zod';
import { ArtistScalarWhereInputObjectSchema } from './ArtistScalarWhereInput.schema';
import { ArtistUpdateManyMutationInputObjectSchema } from './ArtistUpdateManyMutationInput.schema';
import { ArtistUncheckedUpdateManyWithoutComposersInputObjectSchema } from './ArtistUncheckedUpdateManyWithoutComposersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateManyWithWhereWithoutComposedMusicsInput> =
  z
    .object({
      where: z.lazy(() => ArtistScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ArtistUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ArtistUncheckedUpdateManyWithoutComposersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistUpdateManyWithWhereWithoutComposedMusicsInputObjectSchema =
  Schema;
