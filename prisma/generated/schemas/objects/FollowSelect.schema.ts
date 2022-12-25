import { z } from 'zod';
import { NotificationFindManySchema } from '../findManyNotification.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { FollowCountOutputTypeArgsObjectSchema } from './FollowCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowSelect> = z
  .object({
    id: z.boolean().optional(),
    notifications: z
      .union([z.boolean(), z.lazy(() => NotificationFindManySchema)])
      .optional(),
    follower: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    followerId: z.boolean().optional(),
    following: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    followingId: z.boolean().optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => FollowCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const FollowSelectObjectSchema = Schema;
