import { z } from 'zod';
import { NotificationCreateManyUserInputObjectSchema } from './NotificationCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => NotificationCreateManyUserInputObjectSchema).array(),
  })
  .strict();

export const NotificationCreateManyUserInputEnvelopeObjectSchema = Schema;
