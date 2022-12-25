import { z } from 'zod';
import { NotificationFindManySchema } from '../findManyNotification.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { FollowCountOutputTypeArgsObjectSchema } from './FollowCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowInclude> = z
  .object({
    notifications: z
      .union([z.boolean(), z.lazy(() => NotificationFindManySchema)])
      .optional(),
    follower: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    following: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => FollowCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const FollowIncludeObjectSchema = Schema;
