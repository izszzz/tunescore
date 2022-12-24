import { z } from 'zod';
import { BookmarkCreateWithoutArtistInputObjectSchema } from './BookmarkCreateWithoutArtistInput.schema';
import { BookmarkUncheckedCreateWithoutArtistInputObjectSchema } from './BookmarkUncheckedCreateWithoutArtistInput.schema';
import { BookmarkCreateOrConnectWithoutArtistInputObjectSchema } from './BookmarkCreateOrConnectWithoutArtistInput.schema';
import { BookmarkCreateManyArtistInputEnvelopeObjectSchema } from './BookmarkCreateManyArtistInputEnvelope.schema';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUncheckedCreateNestedManyWithoutArtistInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BookmarkCreateWithoutArtistInputObjectSchema),
          z.lazy(() => BookmarkCreateWithoutArtistInputObjectSchema).array(),
          z.lazy(() => BookmarkUncheckedCreateWithoutArtistInputObjectSchema),
          z
            .lazy(() => BookmarkUncheckedCreateWithoutArtistInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => BookmarkCreateOrConnectWithoutArtistInputObjectSchema),
          z
            .lazy(() => BookmarkCreateOrConnectWithoutArtistInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BookmarkCreateManyArtistInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
          z.lazy(() => BookmarkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BookmarkUncheckedCreateNestedManyWithoutArtistInputObjectSchema =
  Schema;
