import { z } from 'zod';
import { NotificationUncheckedUpdateManyWithoutFollowedNestedInputObjectSchema } from './NotificationUncheckedUpdateManyWithoutFollowedNestedInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUncheckedUpdateWithoutFollowerInput> = z
  .object({
    notifications: z
      .lazy(
        () =>
          NotificationUncheckedUpdateManyWithoutFollowedNestedInputObjectSchema,
      )
      .optional(),
    followingId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const FollowUncheckedUpdateWithoutFollowerInputObjectSchema = Schema;
