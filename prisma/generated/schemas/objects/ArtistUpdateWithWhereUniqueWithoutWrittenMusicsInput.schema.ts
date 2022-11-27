import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutWrittenMusicsInputObjectSchema } from './ArtistUpdateWithoutWrittenMusicsInput.schema';
import { ArtistUncheckedUpdateWithoutWrittenMusicsInputObjectSchema } from './ArtistUncheckedUpdateWithoutWrittenMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateWithWhereUniqueWithoutWrittenMusicsInput> =
  z
    .object({
      where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ArtistUpdateWithoutWrittenMusicsInputObjectSchema),
        z.lazy(
          () => ArtistUncheckedUpdateWithoutWrittenMusicsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistUpdateWithWhereUniqueWithoutWrittenMusicsInputObjectSchema =
  Schema;
