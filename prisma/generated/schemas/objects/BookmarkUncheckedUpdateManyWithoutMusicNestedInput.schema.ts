import { z } from 'zod';
import { BookmarkCreateWithoutMusicInputObjectSchema } from './BookmarkCreateWithoutMusicInput.schema';
import { BookmarkUncheckedCreateWithoutMusicInputObjectSchema } from './BookmarkUncheckedCreateWithoutMusicInput.schema';
import { BookmarkCreateOrConnectWithoutMusicInputObjectSchema } from './BookmarkCreateOrConnectWithoutMusicInput.schema';
import { BookmarkUpsertWithWhereUniqueWithoutMusicInputObjectSchema } from './BookmarkUpsertWithWhereUniqueWithoutMusicInput.schema';
import { BookmarkCreateManyMusicInputEnvelopeObjectSchema } from './BookmarkCreateManyMusicInputEnvelope.schema';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';
import { BookmarkUpdateWithWhereUniqueWithoutMusicInputObjectSchema } from './BookmarkUpdateWithWhereUniqueWithoutMusicInput.schema';
import { BookmarkUpdateManyWithWhereWithoutMusicInputObjectSchema } from './BookmarkUpdateManyWithWhereWithoutMusicInput.schema';
import { BookmarkScalarWhereInputObjectSchema } from './BookmarkScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUncheckedUpdateManyWithoutMusicNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => BookmarkUpsertWithWhereUniqueWithoutMusicInputObjectSchema,
          ),
          z
            .lazy(
              () => BookmarkUpsertWithWhereUniqueWithoutMusicInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BookmarkCreateManyMusicInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
          z.lazy(() => BookmarkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
          z.lazy(() => BookmarkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
          z.lazy(() => BookmarkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
          z.lazy(() => BookmarkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => BookmarkUpdateWithWhereUniqueWithoutMusicInputObjectSchema,
          ),
          z
            .lazy(
              () => BookmarkUpdateWithWhereUniqueWithoutMusicInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => BookmarkUpdateManyWithWhereWithoutMusicInputObjectSchema,
          ),
          z
            .lazy(
              () => BookmarkUpdateManyWithWhereWithoutMusicInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => BookmarkScalarWhereInputObjectSchema),
          z.lazy(() => BookmarkScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BookmarkUncheckedUpdateManyWithoutMusicNestedInputObjectSchema =
  Schema;
