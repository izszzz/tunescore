import { z } from 'zod';
import { NotificationFindManySchema } from '../findManyNotification.schema';
import { MusicArgsObjectSchema } from './MusicArgs.schema';
import { BandArgsObjectSchema } from './BandArgs.schema';
import { AlbumArgsObjectSchema } from './AlbumArgs.schema';
import { ArtistArgsObjectSchema } from './ArtistArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { BookmarkCountOutputTypeArgsObjectSchema } from './BookmarkCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkSelect> = z
  .object({
    id: z.boolean().optional(),
    notifications: z
      .union([z.boolean(), z.lazy(() => NotificationFindManySchema)])
      .optional(),
    music: z
      .union([z.boolean(), z.lazy(() => MusicArgsObjectSchema)])
      .optional(),
    band: z.union([z.boolean(), z.lazy(() => BandArgsObjectSchema)]).optional(),
    album: z
      .union([z.boolean(), z.lazy(() => AlbumArgsObjectSchema)])
      .optional(),
    artist: z
      .union([z.boolean(), z.lazy(() => ArtistArgsObjectSchema)])
      .optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    resourceId: z.boolean().optional(),
    resourceType: z.boolean().optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => BookmarkCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const BookmarkSelectObjectSchema = Schema;