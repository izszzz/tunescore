import { z } from 'zod';
import { BookmarkCreateWithoutArtistInputObjectSchema } from './BookmarkCreateWithoutArtistInput.schema';
import { BookmarkUncheckedCreateWithoutArtistInputObjectSchema } from './BookmarkUncheckedCreateWithoutArtistInput.schema';
import { BookmarkCreateOrConnectWithoutArtistInputObjectSchema } from './BookmarkCreateOrConnectWithoutArtistInput.schema';
import { BookmarkUpsertWithWhereUniqueWithoutArtistInputObjectSchema } from './BookmarkUpsertWithWhereUniqueWithoutArtistInput.schema';
import { BookmarkCreateManyArtistInputEnvelopeObjectSchema } from './BookmarkCreateManyArtistInputEnvelope.schema';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';
import { BookmarkUpdateWithWhereUniqueWithoutArtistInputObjectSchema } from './BookmarkUpdateWithWhereUniqueWithoutArtistInput.schema';
import { BookmarkUpdateManyWithWhereWithoutArtistInputObjectSchema } from './BookmarkUpdateManyWithWhereWithoutArtistInput.schema';
import { BookmarkScalarWhereInputObjectSchema } from './BookmarkScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUncheckedUpdateManyWithoutArtistNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => BookmarkUpsertWithWhereUniqueWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () => BookmarkUpsertWithWhereUniqueWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BookmarkCreateManyArtistInputEnvelopeObjectSchema)
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
            () => BookmarkUpdateWithWhereUniqueWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () => BookmarkUpdateWithWhereUniqueWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => BookmarkUpdateManyWithWhereWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () => BookmarkUpdateManyWithWhereWithoutArtistInputObjectSchema,
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

export const BookmarkUncheckedUpdateManyWithoutArtistNestedInputObjectSchema =
  Schema;
