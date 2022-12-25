import { z } from 'zod';
import { FollowUpdateWithoutNotificationsInputObjectSchema } from './FollowUpdateWithoutNotificationsInput.schema';
import { FollowUncheckedUpdateWithoutNotificationsInputObjectSchema } from './FollowUncheckedUpdateWithoutNotificationsInput.schema';
import { FollowCreateWithoutNotificationsInputObjectSchema } from './FollowCreateWithoutNotificationsInput.schema';
import { FollowUncheckedCreateWithoutNotificationsInputObjectSchema } from './FollowUncheckedCreateWithoutNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUpsertWithoutNotificationsInput> = z
  .object({
    update: z.union([
      z.lazy(() => FollowUpdateWithoutNotificationsInputObjectSchema),
      z.lazy(() => FollowUncheckedUpdateWithoutNotificationsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => FollowCreateWithoutNotificationsInputObjectSchema),
      z.lazy(() => FollowUncheckedCreateWithoutNotificationsInputObjectSchema),
    ]),
  })
  .strict();

export const FollowUpsertWithoutNotificationsInputObjectSchema = Schema;
