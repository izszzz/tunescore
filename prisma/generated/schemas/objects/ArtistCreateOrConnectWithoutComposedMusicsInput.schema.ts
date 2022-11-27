import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistCreateWithoutComposedMusicsInputObjectSchema } from './ArtistCreateWithoutComposedMusicsInput.schema';
import { ArtistUncheckedCreateWithoutComposedMusicsInputObjectSchema } from './ArtistUncheckedCreateWithoutComposedMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutComposedMusicsInput> =
  z
    .object({
      where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ArtistCreateWithoutComposedMusicsInputObjectSchema),
        z.lazy(
          () => ArtistUncheckedCreateWithoutComposedMusicsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistCreateOrConnectWithoutComposedMusicsInputObjectSchema =
  Schema;
