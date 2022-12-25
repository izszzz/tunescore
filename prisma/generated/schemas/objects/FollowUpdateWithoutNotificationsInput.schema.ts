import { z } from 'zod';
import { UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFollowersNestedInput.schema';
import { UserUpdateOneRequiredWithoutFollowingNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFollowingNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUpdateWithoutNotificationsInput> = z
  .object({
    follower: z
      .lazy(() => UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema)
      .optional(),
    following: z
      .lazy(() => UserUpdateOneRequiredWithoutFollowingNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const FollowUpdateWithoutNotificationsInputObjectSchema = Schema;
