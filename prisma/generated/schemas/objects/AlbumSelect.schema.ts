import { z } from 'zod';
import { BandArgsObjectSchema } from './BandArgs.schema';
import { MusicFindManySchema } from '../findManyMusic.schema';
import { ArtistFindManySchema } from '../findManyArtist.schema';
import { UserFindManySchema } from '../findManyUser.schema';
import { AlbumCountOutputTypeArgsObjectSchema } from './AlbumCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    band: z.union([z.boolean(), z.lazy(() => BandArgsObjectSchema)]).optional(),
    bandId: z.boolean().optional(),
    musics: z
      .union([z.boolean(), z.lazy(() => MusicFindManySchema)])
      .optional(),
    musicIDs: z.boolean().optional(),
    artists: z
      .union([z.boolean(), z.lazy(() => ArtistFindManySchema)])
      .optional(),
    artistIDs: z.boolean().optional(),
    bookmarks: z
      .union([z.boolean(), z.lazy(() => UserFindManySchema)])
      .optional(),
    userIDs: z.boolean().optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => AlbumCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const AlbumSelectObjectSchema = Schema;
