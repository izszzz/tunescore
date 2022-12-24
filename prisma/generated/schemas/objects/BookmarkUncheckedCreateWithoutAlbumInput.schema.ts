import { z } from 'zod';
import { BookmarkCreateuserIDsInputObjectSchema } from './BookmarkCreateuserIDsInput.schema';
import { BookmarkTypeSchema } from '../enums/BookmarkType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUncheckedCreateWithoutAlbumInput> = z
  .object({
    id: z.string().optional(),
    userIDs: z
      .union([
        z.lazy(() => BookmarkCreateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    resourceType: z.lazy(() => BookmarkTypeSchema),
  })
  .strict();

export const BookmarkUncheckedCreateWithoutAlbumInputObjectSchema = Schema;
