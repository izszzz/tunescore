import { z } from 'zod';
import { NotificationCreateManyCommentedInputObjectSchema } from './NotificationCreateManyCommentedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateManyCommentedInputEnvelope> = z
  .object({
    data: z
      .lazy(() => NotificationCreateManyCommentedInputObjectSchema)
      .array(),
  })
  .strict();

export const NotificationCreateManyCommentedInputEnvelopeObjectSchema = Schema;
