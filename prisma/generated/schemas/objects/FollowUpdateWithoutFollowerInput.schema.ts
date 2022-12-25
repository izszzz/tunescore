import { z } from 'zod';
import { NotificationUpdateManyWithoutFollowedNestedInputObjectSchema } from './NotificationUpdateManyWithoutFollowedNestedInput.schema';
import { UserUpdateOneRequiredWithoutFollowingNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFollowingNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUpdateWithoutFollowerInput> = z
  .object({
    notifications: z
      .lazy(() => NotificationUpdateManyWithoutFollowedNestedInputObjectSchema)
      .optional(),
    following: z
      .lazy(() => UserUpdateOneRequiredWithoutFollowingNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const FollowUpdateWithoutFollowerInputObjectSchema = Schema;
