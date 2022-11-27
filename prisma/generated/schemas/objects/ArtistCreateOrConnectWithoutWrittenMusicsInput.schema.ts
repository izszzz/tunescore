import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistCreateWithoutWrittenMusicsInputObjectSchema } from './ArtistCreateWithoutWrittenMusicsInput.schema';
import { ArtistUncheckedCreateWithoutWrittenMusicsInputObjectSchema } from './ArtistUncheckedCreateWithoutWrittenMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutWrittenMusicsInput> =
  z
    .object({
      where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ArtistCreateWithoutWrittenMusicsInputObjectSchema),
        z.lazy(
          () => ArtistUncheckedCreateWithoutWrittenMusicsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistCreateOrConnectWithoutWrittenMusicsInputObjectSchema =
  Schema;
