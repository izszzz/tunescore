import { z } from 'zod';
import { MusicCreateNestedOneWithoutBookmarksInputObjectSchema } from './MusicCreateNestedOneWithoutBookmarksInput.schema';
import { BandCreateNestedOneWithoutBookmarksInputObjectSchema } from './BandCreateNestedOneWithoutBookmarksInput.schema';
import { AlbumCreateNestedOneWithoutBookmarksInputObjectSchema } from './AlbumCreateNestedOneWithoutBookmarksInput.schema';
import { UserCreateNestedOneWithoutBookmarksInputObjectSchema } from './UserCreateNestedOneWithoutBookmarksInput.schema';
import { BookmarkTypeSchema } from '../enums/BookmarkType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCreateWithoutArtistInput> = z
  .object({
    id: z.string().optional(),
    music: z
      .lazy(() => MusicCreateNestedOneWithoutBookmarksInputObjectSchema)
      .optional(),
    band: z
      .lazy(() => BandCreateNestedOneWithoutBookmarksInputObjectSchema)
      .optional(),
    album: z
      .lazy(() => AlbumCreateNestedOneWithoutBookmarksInputObjectSchema)
      .optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutBookmarksInputObjectSchema),
    resourceType: z.lazy(() => BookmarkTypeSchema),
  })
  .strict();

export const BookmarkCreateWithoutArtistInputObjectSchema = Schema;
