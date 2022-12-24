import { z } from 'zod';
import { BookmarkCreateWithoutMusicInputObjectSchema } from './BookmarkCreateWithoutMusicInput.schema';
import { BookmarkUncheckedCreateWithoutMusicInputObjectSchema } from './BookmarkUncheckedCreateWithoutMusicInput.schema';
import { BookmarkCreateOrConnectWithoutMusicInputObjectSchema } from './BookmarkCreateOrConnectWithoutMusicInput.schema';
import { BookmarkCreateManyMusicInputEnvelopeObjectSchema } from './BookmarkCreateManyMusicInputEnvelope.schema';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUncheckedCreateNestedManyWithoutMusicInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BookmarkCreateWithoutMusicInputObjectSchema),
          z.lazy(() => BookmarkCreateWithoutMusicInputObjectSchema).array(),
          z.lazy(() => BookmarkUncheckedCreateWithoutMusicInputObjectSchema),
          z
            .lazy(() => BookmarkUncheckedCreateWithoutMusicInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => BookmarkCreateOrConnectWithoutMusicInputObjectSchema),
          z
            .lazy(() => BookmarkCreateOrConnectWithoutMusicInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BookmarkCreateManyMusicInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
          z.lazy(() => BookmarkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BookmarkUncheckedCreateNestedManyWithoutMusicInputObjectSchema =
  Schema;
