import { z } from 'zod';
import { MusicFindManySchema } from '../findManyMusic.schema';
import { BandFindManySchema } from '../findManyBand.schema';
import { AlbumFindManySchema } from '../findManyAlbum.schema';
import { BookmarkFindManySchema } from '../findManyBookmark.schema';
import { ArtistCountOutputTypeArgsObjectSchema } from './ArtistCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    link: z.boolean().optional(),
    writtenMusics: z
      .union([z.boolean(), z.lazy(() => MusicFindManySchema)])
      .optional(),
    writtenMusicsIDs: z.boolean().optional(),
    composedMusics: z
      .union([z.boolean(), z.lazy(() => MusicFindManySchema)])
      .optional(),
    composedMusicsIDs: z.boolean().optional(),
    musics: z
      .union([z.boolean(), z.lazy(() => MusicFindManySchema)])
      .optional(),
    musicIDs: z.boolean().optional(),
    bands: z.union([z.boolean(), z.lazy(() => BandFindManySchema)]).optional(),
    bandIDs: z.boolean().optional(),
    albums: z
      .union([z.boolean(), z.lazy(() => AlbumFindManySchema)])
      .optional(),
    albumIDs: z.boolean().optional(),
    bookmarks: z
      .union([z.boolean(), z.lazy(() => BookmarkFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ArtistCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ArtistSelectObjectSchema = Schema;
