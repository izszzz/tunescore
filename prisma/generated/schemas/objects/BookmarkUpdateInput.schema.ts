import { z } from 'zod';
import { MusicUpdateOneWithoutBookmarksNestedInputObjectSchema } from './MusicUpdateOneWithoutBookmarksNestedInput.schema';
import { BandUpdateOneWithoutBookmarksNestedInputObjectSchema } from './BandUpdateOneWithoutBookmarksNestedInput.schema';
import { AlbumUpdateOneWithoutBookmarksNestedInputObjectSchema } from './AlbumUpdateOneWithoutBookmarksNestedInput.schema';
import { ArtistUpdateOneWithoutBookmarksNestedInputObjectSchema } from './ArtistUpdateOneWithoutBookmarksNestedInput.schema';
import { UserUpdateOneRequiredWithoutBookmarksNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutBookmarksNestedInput.schema';
import { BookmarkTypeSchema } from '../enums/BookmarkType.schema';
import { EnumBookmarkTypeFieldUpdateOperationsInputObjectSchema } from './EnumBookmarkTypeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUpdateInput> = z
  .object({
    music: z
      .lazy(() => MusicUpdateOneWithoutBookmarksNestedInputObjectSchema)
      .optional(),
    band: z
      .lazy(() => BandUpdateOneWithoutBookmarksNestedInputObjectSchema)
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

export const BookmarkUpdateInputObjectSchema = Schema;
