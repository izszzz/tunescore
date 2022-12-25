import { z } from 'zod';
import { FollowCreateManyFollowingInputObjectSchema } from './FollowCreateManyFollowingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowCreateManyFollowingInputEnvelope> = z
  .object({
    data: z.lazy(() => FollowCreateManyFollowingInputObjectSchema).array(),
  })
  .strict();

export const FollowCreateManyFollowingInputEnvelopeObjectSchema = Schema;
