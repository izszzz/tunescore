import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { BandArgsObjectSchema } from './BandArgs.schema';
import { AlbumFindManySchema } from '../findManyAlbum.schema';
import { ArtistFindManySchema } from '../findManyArtist.schema';
import { IssueFindManySchema } from '../findManyIssue.schema';
import { PullFindManySchema } from '../findManyPull.schema';
import { BookmarkFindManySchema } from '../findManyBookmark.schema';
import { MusicCountOutputTypeArgsObjectSchema } from './MusicCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicSelect> = z
  .object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    title: z.boolean().optional(),
    score: z.boolean().optional(),
    visibility: z.boolean().optional(),
    price: z.boolean().optional(),
    link: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    band: z.union([z.boolean(), z.lazy(() => BandArgsObjectSchema)]).optional(),
    bandId: z.boolean().optional(),
    albums: z
      .union([z.boolean(), z.lazy(() => AlbumFindManySchema)])
      .optional(),
    albumIDs: z.boolean().optional(),
    composers: z
      .union([z.boolean(), z.lazy(() => ArtistFindManySchema)])
      .optional(),
    composerIDs: z.boolean().optional(),
    lyrists: z
      .union([z.boolean(), z.lazy(() => ArtistFindManySchema)])
      .optional(),
    lyristIDs: z.boolean().optional(),
    artists: z
      .union([z.boolean(), z.lazy(() => ArtistFindManySchema)])
      .optional(),
    artistIDs: z.boolean().optional(),
    issues: z
      .union([z.boolean(), z.lazy(() => IssueFindManySchema)])
      .optional(),
    pulls: z.union([z.boolean(), z.lazy(() => PullFindManySchema)]).optional(),
    bookmarks: z
      .union([z.boolean(), z.lazy(() => BookmarkFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => MusicCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const MusicSelectObjectSchema = Schema;
