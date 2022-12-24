import { z } from 'zod';
import { BookmarkCreateWithoutBandInputObjectSchema } from './BookmarkCreateWithoutBandInput.schema';
import { BookmarkUncheckedCreateWithoutBandInputObjectSchema } from './BookmarkUncheckedCreateWithoutBandInput.schema';
import { BookmarkCreateOrConnectWithoutBandInputObjectSchema } from './BookmarkCreateOrConnectWithoutBandInput.schema';
import { BookmarkUpsertWithWhereUniqueWithoutBandInputObjectSchema } from './BookmarkUpsertWithWhereUniqueWithoutBandInput.schema';
import { BookmarkCreateManyBandInputEnvelopeObjectSchema } from './BookmarkCreateManyBandInputEnvelope.schema';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';
import { BookmarkUpdateWithWhereUniqueWithoutBandInputObjectSchema } from './BookmarkUpdateWithWhereUniqueWithoutBandInput.schema';
import { BookmarkUpdateManyWithWhereWithoutBandInputObjectSchema } from './BookmarkUpdateManyWithWhereWithoutBandInput.schema';
import { BookmarkScalarWhereInputObjectSchema } from './BookmarkScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUncheckedUpdateManyWithoutBandNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BookmarkCreateWithoutBandInputObjectSchema),
          z.lazy(() => BookmarkCreateWithoutBandInputObjectSchema).array(),
          z.lazy(() => BookmarkUncheckedCreateWithoutBandInputObjectSchema),
          z
            .lazy(() => BookmarkUncheckedCreateWithoutBandInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => BookmarkCreateOrConnectWithoutBandInputObjectSchema),
          z
            .lazy(() => BookmarkCreateOrConnectWithoutBandInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => BookmarkUpsertWithWhereUniqueWithoutBandInputObjectSchema,
          ),
          z
            .lazy(
              () => BookmarkUpsertWithWhereUniqueWithoutBandInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BookmarkCreateManyBandInputEnvelopeObjectSchema)
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
            () => BookmarkUpdateWithWhereUniqueWithoutBandInputObjectSchema,
          ),
          z
            .lazy(
              () => BookmarkUpdateWithWhereUniqueWithoutBandInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => BookmarkUpdateManyWithWhereWithoutBandInputObjectSchema),
          z
            .lazy(() => BookmarkUpdateManyWithWhereWithoutBandInputObjectSchema)
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

export const BookmarkUncheckedUpdateManyWithoutBandNestedInputObjectSchema =
  Schema;
