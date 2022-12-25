import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { NotificationListRelationFilterObjectSchema } from './NotificationListRelationFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FollowWhereInputObjectSchema),
        z.lazy(() => FollowWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FollowWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FollowWhereInputObjectSchema),
        z.lazy(() => FollowWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    notifications: z
      .lazy(() => NotificationListRelationFilterObjectSchema)
      .optional(),
    follower: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    followerId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    following: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    followingId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const FollowWhereInputObjectSchema = Schema;
