import { z } from 'zod';
import { MusicFindManySchema } from '../findManyMusic.schema';
import { BandFindManySchema } from '../findManyBand.schema';
import { AlbumFindManySchema } from '../findManyAlbum.schema';
import { UserFindManySchema } from '../findManyUser.schema';
import { ArtistCountOutputTypeArgsObjectSchema } from './ArtistCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistInclude> = z
  .object({
    writtenMusics: z
      .union([z.boolean(), z.lazy(() => MusicFindManySchema)])
      .optional(),
    composedMusics: z
      .union([z.boolean(), z.lazy(() => MusicFindManySchema)])
      .optional(),
    musics: z
      .union([z.boolean(), z.lazy(() => MusicFindManySchema)])
      .optional(),
    bands: z.union([z.boolean(), z.lazy(() => BandFindManySchema)]).optional(),
    albums: z
      .union([z.boolean(), z.lazy(() => AlbumFindManySchema)])
      .optional(),
    bookmarks: z
      .union([z.boolean(), z.lazy(() => UserFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ArtistCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ArtistIncludeObjectSchema = Schema;
