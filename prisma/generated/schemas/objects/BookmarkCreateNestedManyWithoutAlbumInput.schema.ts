import { z } from 'zod';
import { BookmarkCreateWithoutAlbumInputObjectSchema } from './BookmarkCreateWithoutAlbumInput.schema';
import { BookmarkUncheckedCreateWithoutAlbumInputObjectSchema } from './BookmarkUncheckedCreateWithoutAlbumInput.schema';
import { BookmarkCreateOrConnectWithoutAlbumInputObjectSchema } from './BookmarkCreateOrConnectWithoutAlbumInput.schema';
import { BookmarkCreateManyAlbumInputEnvelopeObjectSchema } from './BookmarkCreateManyAlbumInputEnvelope.schema';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCreateNestedManyWithoutAlbumInput> = z
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
    createMany: z
      .lazy(() => BookmarkCreateManyAlbumInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
        z.lazy(() => BookmarkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const BookmarkCreateNestedManyWithoutAlbumInputObjectSchema = Schema;
