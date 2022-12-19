import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { MusicOrderByRelationAggregateInputObjectSchema } from './MusicOrderByRelationAggregateInput.schema';
import { IssueOrderByRelationAggregateInputObjectSchema } from './IssueOrderByRelationAggregateInput.schema';
import { PullOrderByRelationAggregateInputObjectSchema } from './PullOrderByRelationAggregateInput.schema';
import { NotificationOrderByRelationAggregateInputObjectSchema } from './NotificationOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';
import { ArtistOrderByRelationAggregateInputObjectSchema } from './ArtistOrderByRelationAggregateInput.schema';
import { BandOrderByRelationAggregateInputObjectSchema } from './BandOrderByRelationAggregateInput.schema';
import { AlbumOrderByRelationAggregateInputObjectSchema } from './AlbumOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    accounts: z
      .lazy(() => AccountOrderByRelationAggregateInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    musics: z
      .lazy(() => MusicOrderByRelationAggregateInputObjectSchema)
      .optional(),
    issues: z
      .lazy(() => IssueOrderByRelationAggregateInputObjectSchema)
      .optional(),
    pulls: z
      .lazy(() => PullOrderByRelationAggregateInputObjectSchema)
      .optional(),
    notifications: z
      .lazy(() => NotificationOrderByRelationAggregateInputObjectSchema)
      .optional(),
    followedBy: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
    followedByIDs: z.lazy(() => SortOrderSchema).optional(),
    following: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
    followingIDs: z.lazy(() => SortOrderSchema).optional(),
    bookmarkMusics: z
      .lazy(() => MusicOrderByRelationAggregateInputObjectSchema)
      .optional(),
    bookmarkMusicIDs: z.lazy(() => SortOrderSchema).optional(),
    bookmarkArtists: z
      .lazy(() => ArtistOrderByRelationAggregateInputObjectSchema)
      .optional(),
    bookmarkArtistIDs: z.lazy(() => SortOrderSchema).optional(),
    bookmarkBands: z
      .lazy(() => BandOrderByRelationAggregateInputObjectSchema)
      .optional(),
    bookmarkBandIDs: z.lazy(() => SortOrderSchema).optional(),
    bookmarkAlbums: z
      .lazy(() => AlbumOrderByRelationAggregateInputObjectSchema)
      .optional(),
    bookmarkAlbumIDs: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
