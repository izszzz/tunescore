import { z } from 'zod';
import { PullScoreCreateEnvelopeInputObjectSchema } from './PullScoreCreateEnvelopeInput.schema';
import { PullScoreCreateInputObjectSchema } from './PullScoreCreateInput.schema';
import { PullStatusSchema } from '../enums/PullStatus.schema';
import { VoteUncheckedCreateNestedOneWithoutPullInputObjectSchema } from './VoteUncheckedCreateNestedOneWithoutPullInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    body: z.string(),
    score: z.union([
      z.lazy(() => PullScoreCreateEnvelopeInputObjectSchema),
      z.lazy(() => PullScoreCreateInputObjectSchema),
    ]),
    status: z.lazy(() => PullStatusSchema),
    vote: z
      .lazy(() => VoteUncheckedCreateNestedOneWithoutPullInputObjectSchema)
      .optional(),
    musicId: z.string(),
  })
  .strict();

export const PullUncheckedCreateWithoutUserInputObjectSchema = Schema;
