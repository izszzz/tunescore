import { z } from 'zod';
import { NotificationCreateManyFollowedInputObjectSchema } from './NotificationCreateManyFollowedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateManyFollowedInputEnvelope> = z
  .object({
    data: z.lazy(() => NotificationCreateManyFollowedInputObjectSchema).array(),
  })
  .strict();

export const NotificationCreateManyFollowedInputEnvelopeObjectSchema = Schema;
