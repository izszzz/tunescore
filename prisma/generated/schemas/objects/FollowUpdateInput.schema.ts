import { z } from 'zod';
import { NotificationUpdateManyWithoutFollowedNestedInputObjectSchema } from './NotificationUpdateManyWithoutFollowedNestedInput.schema';
import { UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFollowersNestedInput.schema';
import { UserUpdateOneRequiredWithoutFollowingNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFollowingNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUpdateInput> = z
  .object({
    notifications: z
      .lazy(() => NotificationUpdateManyWithoutFollowedNestedInputObjectSchema)
      .optional(),
    follower: z
      .lazy(() => UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema)
      .optional(),
    following: z
      .lazy(() => UserUpdateOneRequiredWithoutFollowingNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const FollowUpdateInputObjectSchema = Schema;
