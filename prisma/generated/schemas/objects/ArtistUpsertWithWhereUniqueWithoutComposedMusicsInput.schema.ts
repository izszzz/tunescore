import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutComposedMusicsInputObjectSchema } from './ArtistUpdateWithoutComposedMusicsInput.schema';
import { ArtistUncheckedUpdateWithoutComposedMusicsInputObjectSchema } from './ArtistUncheckedUpdateWithoutComposedMusicsInput.schema';
import { ArtistCreateWithoutComposedMusicsInputObjectSchema } from './ArtistCreateWithoutComposedMusicsInput.schema';
import { ArtistUncheckedCreateWithoutComposedMusicsInputObjectSchema } from './ArtistUncheckedCreateWithoutComposedMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpsertWithWhereUniqueWithoutComposedMusicsInput> =
  z
    .object({
      where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ArtistUpdateWithoutComposedMusicsInputObjectSchema),
        z.lazy(
          () => ArtistUncheckedUpdateWithoutComposedMusicsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ArtistCreateWithoutComposedMusicsInputObjectSchema),
        z.lazy(
          () => ArtistUncheckedCreateWithoutComposedMusicsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistUpsertWithWhereUniqueWithoutComposedMusicsInputObjectSchema =
  Schema;
