import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutComposedMusicsInputObjectSchema } from './ArtistUpdateWithoutComposedMusicsInput.schema';
import { ArtistUncheckedUpdateWithoutComposedMusicsInputObjectSchema } from './ArtistUncheckedUpdateWithoutComposedMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateWithWhereUniqueWithoutComposedMusicsInput> =
  z
    .object({
      where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ArtistUpdateWithoutComposedMusicsInputObjectSchema),
        z.lazy(
          () => ArtistUncheckedUpdateWithoutComposedMusicsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistUpdateWithWhereUniqueWithoutComposedMusicsInputObjectSchema =
  Schema;
