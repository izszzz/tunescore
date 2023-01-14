import { z } from 'zod';
import { PointCreateManyIssueInputObjectSchema } from './PointCreateManyIssueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateManyIssueInputEnvelope> = z
  .object({
    data: z.lazy(() => PointCreateManyIssueInputObjectSchema).array(),
  })
  .strict();

export const PointCreateManyIssueInputEnvelopeObjectSchema = Schema;
