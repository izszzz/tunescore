import { z } from 'zod';
import { MusicFindManySchema } from '../findManyMusic.schema';
import { ArtistFindManySchema } from '../findManyArtist.schema';
import { AlbumFindManySchema } from '../findManyAlbum.schema';
import { BookmarkFindManySchema } from '../findManyBookmark.schema';
import { TagMapFindManySchema } from '../findManyTagMap.schema';
import { BandCountOutputTypeArgsObjectSchema } from './BandCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandInclude> = z
  .object({
    musics: z
      .union([z.boolean(), z.lazy(() => MusicFindManySchema)])
      .optional(),
    artists: z
      .union([z.boolean(), z.lazy(() => ArtistFindManySchema)])
      .optional(),
    albums: z
      .union([z.boolean(), z.lazy(() => AlbumFindManySchema)])
      .optional(),
    bookmarks: z
      .union([z.boolean(), z.lazy(() => BookmarkFindManySchema)])
      .optional(),
    tagMaps: z
      .union([z.boolean(), z.lazy(() => TagMapFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => BandCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const BandIncludeObjectSchema = Schema;
