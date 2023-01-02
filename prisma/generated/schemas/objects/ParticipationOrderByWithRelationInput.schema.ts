import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ArtistOrderByWithRelationInputObjectSchema } from './ArtistOrderByWithRelationInput.schema';
import { MusicOrderByWithRelationInputObjectSchema } from './MusicOrderByWithRelationInput.schema';
import { RoleMapOrderByRelationAggregateInputObjectSchema } from './RoleMapOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    artist: z.lazy(() => ArtistOrderByWithRelationInputObjectSchema).optional(),
    artistId: z.lazy(() => SortOrderSchema).optional(),
    music: z.lazy(() => MusicOrderByWithRelationInputObjectSchema).optional(),
    musicId: z.lazy(() => SortOrderSchema).optional(),
    roleMap: z
      .lazy(() => RoleMapOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ParticipationOrderByWithRelationInputObjectSchema = Schema;
