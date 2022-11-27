import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocalesOrderByInputObjectSchema } from './LocalesOrderByInput.schema';
import { BandOrderByWithRelationInputObjectSchema } from './BandOrderByWithRelationInput.schema';
import { MusicOrderByRelationAggregateInputObjectSchema } from './MusicOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => LocalesOrderByInputObjectSchema).optional(),
    band: z.lazy(() => BandOrderByWithRelationInputObjectSchema).optional(),
    bandId: z.lazy(() => SortOrderSchema).optional(),
    musics: z
      .lazy(() => MusicOrderByRelationAggregateInputObjectSchema)
      .optional(),
    musicIDs: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const AlbumOrderByWithRelationInputObjectSchema = Schema;
