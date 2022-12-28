import { z } from 'zod';
import { TagArgsObjectSchema } from './TagArgs.schema';
import { MusicArgsObjectSchema } from './MusicArgs.schema';
import { BandArgsObjectSchema } from './BandArgs.schema';
import { AlbumArgsObjectSchema } from './AlbumArgs.schema';
import { ArtistArgsObjectSchema } from './ArtistArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapInclude> = z
  .object({
    tag: z.union([z.boolean(), z.lazy(() => TagArgsObjectSchema)]).optional(),
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
  })
  .strict();

export const TagMapIncludeObjectSchema = Schema;
