import { z } from 'zod';
import { BandArgsObjectSchema } from './BandArgs.schema';
import { MusicFindManySchema } from '../findManyMusic.schema';
import { ArtistFindManySchema } from '../findManyArtist.schema';
import { BookmarkFindManySchema } from '../findManyBookmark.schema';
import { AlbumCountOutputTypeArgsObjectSchema } from './AlbumCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumInclude> = z
  .object({
    band: z.union([z.boolean(), z.lazy(() => BandArgsObjectSchema)]).optional(),
    musics: z
      .union([z.boolean(), z.lazy(() => MusicFindManySchema)])
      .optional(),
    artists: z
      .union([z.boolean(), z.lazy(() => ArtistFindManySchema)])
      .optional(),
    bookmarks: z
      .union([z.boolean(), z.lazy(() => BookmarkFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => AlbumCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const AlbumIncludeObjectSchema = Schema;
