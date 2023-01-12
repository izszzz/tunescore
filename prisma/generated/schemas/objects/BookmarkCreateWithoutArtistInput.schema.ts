import { z } from 'zod';
import { NotificationCreateNestedManyWithoutBookmarkedInputObjectSchema } from './NotificationCreateNestedManyWithoutBookmarkedInput.schema';
import { MusicCreateNestedOneWithoutBookmarksInputObjectSchema } from './MusicCreateNestedOneWithoutBookmarksInput.schema';
import { BandCreateNestedOneWithoutBookmarksInputObjectSchema } from './BandCreateNestedOneWithoutBookmarksInput.schema';
import { AlbumCreateNestedOneWithoutBookmarksInputObjectSchema } from './AlbumCreateNestedOneWithoutBookmarksInput.schema';
import { UserCreateNestedOneWithoutBookmarksInputObjectSchema } from './UserCreateNestedOneWithoutBookmarksInput.schema';
import { ResourceTypeSchema } from '../enums/ResourceType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCreateWithoutArtistInput> = z
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
    band: z
      .lazy(() => BandCreateNestedOneWithoutBookmarksInputObjectSchema)
      .optional(),
    album: z
      .lazy(() => AlbumCreateNestedOneWithoutBookmarksInputObjectSchema)
      .optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutBookmarksInputObjectSchema),
    resourceType: z.lazy(() => ResourceTypeSchema),
  })
  .strict();

export const BookmarkCreateWithoutArtistInputObjectSchema = Schema;
