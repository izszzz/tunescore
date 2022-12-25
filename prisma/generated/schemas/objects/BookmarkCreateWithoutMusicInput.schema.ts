import { z } from 'zod';
import { NotificationCreateNestedManyWithoutBookmarkedInputObjectSchema } from './NotificationCreateNestedManyWithoutBookmarkedInput.schema';
import { BandCreateNestedOneWithoutBookmarksInputObjectSchema } from './BandCreateNestedOneWithoutBookmarksInput.schema';
import { AlbumCreateNestedOneWithoutBookmarksInputObjectSchema } from './AlbumCreateNestedOneWithoutBookmarksInput.schema';
import { ArtistCreateNestedOneWithoutBookmarksInputObjectSchema } from './ArtistCreateNestedOneWithoutBookmarksInput.schema';
import { UserCreateNestedOneWithoutBookmarksInputObjectSchema } from './UserCreateNestedOneWithoutBookmarksInput.schema';
import { BookmarkTypeSchema } from '../enums/BookmarkType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCreateWithoutMusicInput> = z
  .object({
    id: z.string().optional(),
    notifications: z
      .lazy(
        () => NotificationCreateNestedManyWithoutBookmarkedInputObjectSchema,
      )
      .optional(),
    band: z
      .lazy(() => BandCreateNestedOneWithoutBookmarksInputObjectSchema)
      .optional(),
    album: z
      .lazy(() => AlbumCreateNestedOneWithoutBookmarksInputObjectSchema)
      .optional(),
    artist: z
      .lazy(() => ArtistCreateNestedOneWithoutBookmarksInputObjectSchema)
      .optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutBookmarksInputObjectSchema),
    resourceType: z.lazy(() => BookmarkTypeSchema),
  })
  .strict();

export const BookmarkCreateWithoutMusicInputObjectSchema = Schema;
