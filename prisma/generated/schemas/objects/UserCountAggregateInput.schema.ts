import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    email: z.literal(true).optional(),
    emailVerified: z.literal(true).optional(),
    image: z.literal(true).optional(),
    voteIDs: z.literal(true).optional(),
    followedByIDs: z.literal(true).optional(),
    followingIDs: z.literal(true).optional(),
    bookmarkMusicIDs: z.literal(true).optional(),
    bookmarkArtistIDs: z.literal(true).optional(),
    bookmarkBandIDs: z.literal(true).optional(),
    bookmarkAlbumIDs: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const UserCountAggregateInputObjectSchema = Schema;
