import { z } from 'zod';
import { BookmarkUpdateuserIDsInputObjectSchema } from './BookmarkUpdateuserIDsInput.schema';
import { BookmarkTypeSchema } from '../enums/BookmarkType.schema';
import { EnumBookmarkTypeFieldUpdateOperationsInputObjectSchema } from './EnumBookmarkTypeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUncheckedUpdateWithoutArtistInput> = z
  .object({
    userIDs: z
      .union([
        z.lazy(() => BookmarkUpdateuserIDsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => BookmarkTypeSchema),
        z.lazy(() => EnumBookmarkTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const BookmarkUncheckedUpdateWithoutArtistInputObjectSchema = Schema;
