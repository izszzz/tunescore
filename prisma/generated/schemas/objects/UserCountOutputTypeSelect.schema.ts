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
    bookmarks: z.boolean().optional(),
    notifications: z.boolean().optional(),
    carts: z.boolean().optional(),
    purchases: z.boolean().optional(),
    points: z.boolean().optional(),
    votes: z.boolean().optional(),
    followers: z.boolean().optional(),
    following: z.boolean().optional(),
  })
  .strict();

export const UserCountOutputTypeSelectObjectSchema = Schema;
