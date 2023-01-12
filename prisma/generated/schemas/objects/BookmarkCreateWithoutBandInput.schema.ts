import { z } from 'zod';
import { NotificationCreateNestedManyWithoutBookmarkedInputObjectSchema } from './NotificationCreateNestedManyWithoutBookmarkedInput.schema';
import { MusicCreateNestedOneWithoutBookmarksInputObjectSchema } from './MusicCreateNestedOneWithoutBookmarksInput.schema';
import { AlbumCreateNestedOneWithoutBookmarksInputObjectSchema } from './AlbumCreateNestedOneWithoutBookmarksInput.schema';
import { ArtistCreateNestedOneWithoutBookmarksInputObjectSchema } from './ArtistCreateNestedOneWithoutBookmarksInput.schema';
import { UserCreateNestedOneWithoutBookmarksInputObjectSchema } from './UserCreateNestedOneWithoutBookmarksInput.schema';
import { ResourceTypeSchema } from '../enums/ResourceType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCreateWithoutBandInput> = z
  .object({
    id: z.string().optional(),
    notifications: z
      .lazy(
        () => NotificationCreateNestedManyWithoutBookmarkedInputObjectSchema,
      )
      .optional(),
    music: z
      .lazy(() => MusicCreateNestedOneWithoutBookmarksInputObjectSchema)
      .optional(),
    album: z
      .lazy(() => AlbumCreateNestedOneWithoutBookmarksInputObjectSchema)
      .optional(),
    artist: z
      .lazy(() => ArtistCreateNestedOneWithoutBookmarksInputObjectSchema)
      .optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutBookmarksInputObjectSchema),
    resourceType: z.lazy(() => ResourceTypeSchema),
  })
  .strict();

export const BookmarkCreateWithoutBandInputObjectSchema = Schema;
