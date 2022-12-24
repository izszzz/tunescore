import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z
  .object({
    accounts: z.boolean().optional(),
    sessions: z.boolean().optional(),
    musics: z.boolean().optional(),
    issues: z.boolean().optional(),
    pulls: z.boolean().optional(),
    comments: z.boolean().optional(),
    notifications: z.boolean().optional(),
    vote: z.boolean().optional(),
    followedBy: z.boolean().optional(),
    following: z.boolean().optional(),
    bookmarkMusics: z.boolean().optional(),
    bookmarkArtists: z.boolean().optional(),
    bookmarkBands: z.boolean().optional(),
    bookmarkAlbums: z.boolean().optional(),
  })
  .strict();

export const UserCountOutputTypeSelectObjectSchema = Schema;
