import { z } from 'zod';
import { TagArgsObjectSchema } from './TagArgs.schema';
import { MusicArgsObjectSchema } from './MusicArgs.schema';
import { BandArgsObjectSchema } from './BandArgs.schema';
import { AlbumArgsObjectSchema } from './AlbumArgs.schema';
import { ArtistArgsObjectSchema } from './ArtistArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapSelect> = z
  .object({
    id: z.boolean().optional(),
    tag: z.union([z.boolean(), z.lazy(() => TagArgsObjectSchema)]).optional(),
    tagId: z.boolean().optional(),
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
    resourceId: z.boolean().optional(),
    resourceType: z.boolean().optional(),
  })
  .strict();

export const TagMapSelectObjectSchema = Schema;
