import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    followedByIDs: z.lazy(() => SortOrderSchema).optional(),
    followingIDs: z.lazy(() => SortOrderSchema).optional(),
    bookmarkMusicIDs: z.lazy(() => SortOrderSchema).optional(),
    bookmarkArtistIDs: z.lazy(() => SortOrderSchema).optional(),
    bookmarkBandIDs: z.lazy(() => SortOrderSchema).optional(),
    bookmarkAlbumIDs: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UserCountOrderByAggregateInputObjectSchema = Schema;
