import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { MusicOrderByWithRelationInputObjectSchema } from './MusicOrderByWithRelationInput.schema';
import { BandOrderByWithRelationInputObjectSchema } from './BandOrderByWithRelationInput.schema';
import { AlbumOrderByWithRelationInputObjectSchema } from './AlbumOrderByWithRelationInput.schema';
import { ArtistOrderByWithRelationInputObjectSchema } from './ArtistOrderByWithRelationInput.schema';
import { PullOrderByWithRelationInputObjectSchema } from './PullOrderByWithRelationInput.schema';
import { IssueOrderByWithRelationInputObjectSchema } from './IssueOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    actionType: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    music: z.lazy(() => MusicOrderByWithRelationInputObjectSchema).optional(),
    band: z.lazy(() => BandOrderByWithRelationInputObjectSchema).optional(),
    album: z.lazy(() => AlbumOrderByWithRelationInputObjectSchema).optional(),
    artist: z.lazy(() => ArtistOrderByWithRelationInputObjectSchema).optional(),
    pull: z.lazy(() => PullOrderByWithRelationInputObjectSchema).optional(),
    issue: z.lazy(() => IssueOrderByWithRelationInputObjectSchema).optional(),
    resourceId: z.lazy(() => SortOrderSchema).optional(),
    resourceType: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PointOrderByWithRelationInputObjectSchema = Schema;
