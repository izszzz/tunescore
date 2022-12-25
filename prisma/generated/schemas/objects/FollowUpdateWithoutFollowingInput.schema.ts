import { z } from 'zod';
import { NotificationUpdateManyWithoutFollowedNestedInputObjectSchema } from './NotificationUpdateManyWithoutFollowedNestedInput.schema';
import { UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFollowersNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUpdateWithoutFollowingInput> = z
  .object({
    notifications: z
      .lazy(() => NotificationUpdateManyWithoutFollowedNestedInputObjectSchema)
      .optional(),
    follower: z
      .lazy(() => UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const FollowUpdateWithoutFollowingInputObjectSchema = Schema;
