import { z } from 'zod';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';
import { BookmarkCreateWithoutBandInputObjectSchema } from './BookmarkCreateWithoutBandInput.schema';
import { BookmarkUncheckedCreateWithoutBandInputObjectSchema } from './BookmarkUncheckedCreateWithoutBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCreateOrConnectWithoutBandInput> = z
  .object({
    where: z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BookmarkCreateWithoutBandInputObjectSchema),
      z.lazy(() => BookmarkUncheckedCreateWithoutBandInputObjectSchema),
    ]),
  })
  .strict();

export const BookmarkCreateOrConnectWithoutBandInputObjectSchema = Schema;
