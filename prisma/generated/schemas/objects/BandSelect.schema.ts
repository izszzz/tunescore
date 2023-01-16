import { z } from 'zod';
import { ArtistFindManySchema } from '../findManyArtist.schema';
import { MusicFindManySchema } from '../findManyMusic.schema';
import { AlbumFindManySchema } from '../findManyAlbum.schema';
import { BookmarkFindManySchema } from '../findManyBookmark.schema';
import { TagMapFindManySchema } from '../findManyTagMap.schema';
import { BandCountOutputTypeArgsObjectSchema } from './BandCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    link: z.boolean().optional(),
    artists: z
      .union([z.boolean(), z.lazy(() => ArtistFindManySchema)])
      .optional(),
    artistIDs: z.boolean().optional(),
    musics: z
      .union([z.boolean(), z.lazy(() => MusicFindManySchema)])
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

export const BandSelectObjectSchema = Schema;
