import { z } from 'zod';
import { BookmarkCreateWithoutAlbumInputObjectSchema } from './BookmarkCreateWithoutAlbumInput.schema';
import { BookmarkUncheckedCreateWithoutAlbumInputObjectSchema } from './BookmarkUncheckedCreateWithoutAlbumInput.schema';
import { BookmarkCreateOrConnectWithoutAlbumInputObjectSchema } from './BookmarkCreateOrConnectWithoutAlbumInput.schema';
import { BookmarkUpsertWithWhereUniqueWithoutAlbumInputObjectSchema } from './BookmarkUpsertWithWhereUniqueWithoutAlbumInput.schema';
import { BookmarkCreateManyAlbumInputEnvelopeObjectSchema } from './BookmarkCreateManyAlbumInputEnvelope.schema';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';
import { BookmarkUpdateWithWhereUniqueWithoutAlbumInputObjectSchema } from './BookmarkUpdateWithWhereUniqueWithoutAlbumInput.schema';
import { BookmarkUpdateManyWithWhereWithoutAlbumInputObjectSchema } from './BookmarkUpdateManyWithWhereWithoutAlbumInput.schema';
import { BookmarkScalarWhereInputObjectSchema } from './BookmarkScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUncheckedUpdateManyWithoutAlbumNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BookmarkCreateWithoutAlbumInputObjectSchema),
          z.lazy(() => BookmarkCreateWithoutAlbumInputObjectSchema).array(),
          z.lazy(() => BookmarkUncheckedCreateWithoutAlbumInputObjectSchema),
          z
            .lazy(() => BookmarkUncheckedCreateWithoutAlbumInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => BookmarkCreateOrConnectWithoutAlbumInputObjectSchema),
          z
            .lazy(() => BookmarkCreateOrConnectWithoutAlbumInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => BookmarkUpsertWithWhereUniqueWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () => BookmarkUpsertWithWhereUniqueWithoutAlbumInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BookmarkCreateManyAlbumInputEnvelopeObjectSchema)
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
            () => BookmarkUpdateWithWhereUniqueWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () => BookmarkUpdateWithWhereUniqueWithoutAlbumInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => BookmarkUpdateManyWithWhereWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () => BookmarkUpdateManyWithWhereWithoutAlbumInputObjectSchema,
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

export const BookmarkUncheckedUpdateManyWithoutAlbumNestedInputObjectSchema =
  Schema;
