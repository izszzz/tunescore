import { z } from 'zod';
import { NotificationCreateManyBookmarkedInputObjectSchema } from './NotificationCreateManyBookmarkedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateManyBookmarkedInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => NotificationCreateManyBookmarkedInputObjectSchema)
        .array(),
    })
    .strict();

export const NotificationCreateManyBookmarkedInputEnvelopeObjectSchema = Schema;
