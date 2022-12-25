import { z } from 'zod';
import { FollowCreateManyFollowerInputObjectSchema } from './FollowCreateManyFollowerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowCreateManyFollowerInputEnvelope> = z
  .object({
    data: z.lazy(() => FollowCreateManyFollowerInputObjectSchema).array(),
  })
  .strict();

export const FollowCreateManyFollowerInputEnvelopeObjectSchema = Schema;
