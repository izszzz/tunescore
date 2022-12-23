import { z } from 'zod';
import { PullScoreCreateEnvelopeInputObjectSchema } from './PullScoreCreateEnvelopeInput.schema';
import { PullScoreCreateInputObjectSchema } from './PullScoreCreateInput.schema';
import { PullStatusSchema } from '../enums/PullStatus.schema';
import { CommentUncheckedCreateNestedManyWithoutPullInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutPullInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUncheckedCreateWithoutVoteInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    body: z.string(),
    score: z.union([
      z.lazy(() => PullScoreCreateEnvelopeInputObjectSchema),
      z.lazy(() => PullScoreCreateInputObjectSchema),
    ]),
    status: z.lazy(() => PullStatusSchema),
    comments: z
      .lazy(() => CommentUncheckedCreateNestedManyWithoutPullInputObjectSchema)
      .optional(),
    musicId: z.string(),
    userId: z.string(),
  })
  .strict();

export const PullUncheckedCreateWithoutVoteInputObjectSchema = Schema;
