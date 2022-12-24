import { z } from 'zod';
import { MusicUpdateOneWithoutBookmarksNestedInputObjectSchema } from './MusicUpdateOneWithoutBookmarksNestedInput.schema';
import { AlbumUpdateOneWithoutBookmarksNestedInputObjectSchema } from './AlbumUpdateOneWithoutBookmarksNestedInput.schema';
import { ArtistUpdateOneWithoutBookmarksNestedInputObjectSchema } from './ArtistUpdateOneWithoutBookmarksNestedInput.schema';
import { UserUpdateOneRequiredWithoutBookmarksNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutBookmarksNestedInput.schema';
import { BookmarkTypeSchema } from '../enums/BookmarkType.schema';
import { EnumBookmarkTypeFieldUpdateOperationsInputObjectSchema } from './EnumBookmarkTypeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUpdateWithoutBandInput> = z
  .object({
    music: z
      .lazy(() => MusicUpdateOneWithoutBookmarksNestedInputObjectSchema)
      .optional(),
    album: z
      .lazy(() => AlbumUpdateOneWithoutBookmarksNestedInputObjectSchema)
      .optional(),
    artist: z
      .lazy(() => ArtistUpdateOneWithoutBookmarksNestedInputObjectSchema)
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutBookmarksNestedInputObjectSchema)
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => BookmarkTypeSchema),
        z.lazy(() => EnumBookmarkTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const BookmarkUpdateWithoutBandInputObjectSchema = Schema;
