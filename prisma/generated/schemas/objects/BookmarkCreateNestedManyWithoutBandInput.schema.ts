import { z } from 'zod';
import { BookmarkCreateWithoutBandInputObjectSchema } from './BookmarkCreateWithoutBandInput.schema';
import { BookmarkUncheckedCreateWithoutBandInputObjectSchema } from './BookmarkUncheckedCreateWithoutBandInput.schema';
import { BookmarkCreateOrConnectWithoutBandInputObjectSchema } from './BookmarkCreateOrConnectWithoutBandInput.schema';
import { BookmarkCreateManyBandInputEnvelopeObjectSchema } from './BookmarkCreateManyBandInputEnvelope.schema';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCreateNestedManyWithoutBandInput> = z
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
    createMany: z
      .lazy(() => BookmarkCreateManyBandInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
        z.lazy(() => BookmarkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const BookmarkCreateNestedManyWithoutBandInputObjectSchema = Schema;
