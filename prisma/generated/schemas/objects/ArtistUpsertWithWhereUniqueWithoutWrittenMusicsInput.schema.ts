import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutWrittenMusicsInputObjectSchema } from './ArtistUpdateWithoutWrittenMusicsInput.schema';
import { ArtistUncheckedUpdateWithoutWrittenMusicsInputObjectSchema } from './ArtistUncheckedUpdateWithoutWrittenMusicsInput.schema';
import { ArtistCreateWithoutWrittenMusicsInputObjectSchema } from './ArtistCreateWithoutWrittenMusicsInput.schema';
import { ArtistUncheckedCreateWithoutWrittenMusicsInputObjectSchema } from './ArtistUncheckedCreateWithoutWrittenMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpsertWithWhereUniqueWithoutWrittenMusicsInput> =
  z
    .object({
      where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ArtistUpdateWithoutWrittenMusicsInputObjectSchema),
        z.lazy(
          () => ArtistUncheckedUpdateWithoutWrittenMusicsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ArtistCreateWithoutWrittenMusicsInputObjectSchema),
        z.lazy(
          () => ArtistUncheckedCreateWithoutWrittenMusicsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistUpsertWithWhereUniqueWithoutWrittenMusicsInputObjectSchema =
  Schema;
