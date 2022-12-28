import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TagOrderByWithRelationInputObjectSchema } from './TagOrderByWithRelationInput.schema';
import { MusicOrderByWithRelationInputObjectSchema } from './MusicOrderByWithRelationInput.schema';
import { BandOrderByWithRelationInputObjectSchema } from './BandOrderByWithRelationInput.schema';
import { AlbumOrderByWithRelationInputObjectSchema } from './AlbumOrderByWithRelationInput.schema';
import { ArtistOrderByWithRelationInputObjectSchema } from './ArtistOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    tag: z.lazy(() => TagOrderByWithRelationInputObjectSchema).optional(),
    tagId: z.lazy(() => SortOrderSchema).optional(),
    music: z.lazy(() => MusicOrderByWithRelationInputObjectSchema).optional(),
    band: z.lazy(() => BandOrderByWithRelationInputObjectSchema).optional(),
    album: z.lazy(() => AlbumOrderByWithRelationInputObjectSchema).optional(),
    artist: z.lazy(() => ArtistOrderByWithRelationInputObjectSchema).optional(),
    resourceId: z.lazy(() => SortOrderSchema).optional(),
    resourceType: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TagMapOrderByWithRelationInputObjectSchema = Schema;
