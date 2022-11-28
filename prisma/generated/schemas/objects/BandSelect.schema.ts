import { z } from 'zod';
import { MusicFindManySchema } from '../findManyMusic.schema';
import { ArtistFindManySchema } from '../findManyArtist.schema';
import { AlbumFindManySchema } from '../findManyAlbum.schema';
import { UserFindManySchema } from '../findManyUser.schema';
import { BandCountOutputTypeArgsObjectSchema } from './BandCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    link: z.boolean().optional(),
    musics: z
      .union([z.boolean(), z.lazy(() => MusicFindManySchema)])
      .optional(),
    artists: z
      .union([z.boolean(), z.lazy(() => ArtistFindManySchema)])
      .optional(),
    artistIDs: z.boolean().optional(),
    albums: z
      .union([z.boolean(), z.lazy(() => AlbumFindManySchema)])
      .optional(),
    bookmarks: z
      .union([z.boolean(), z.lazy(() => UserFindManySchema)])
      .optional(),
    userIDs: z.boolean().optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => BandCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const BandSelectObjectSchema = Schema;
