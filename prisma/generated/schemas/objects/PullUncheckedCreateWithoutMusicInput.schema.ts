import { z } from 'zod';
import { PullScoreCreateEnvelopeInputObjectSchema } from './PullScoreCreateEnvelopeInput.schema';
import { PullScoreCreateInputObjectSchema } from './PullScoreCreateInput.schema';
import { PullStatusSchema } from '../enums/PullStatus.schema';
import { VoteUncheckedCreateNestedOneWithoutPullInputObjectSchema } from './VoteUncheckedCreateNestedOneWithoutPullInput.schema';
import { CommentUncheckedCreateNestedManyWithoutPullInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutPullInput.schema';
import { PointUncheckedCreateNestedManyWithoutPullInputObjectSchema } from './PointUncheckedCreateNestedManyWithoutPullInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUncheckedCreateWithoutMusicInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    body: z.string(),
    score: z.union([
      z.lazy(() => PullScoreCreateEnvelopeInputObjectSchema),
      z.lazy(() => PullScoreCreateInputObjectSchema),
    ]),
    status: z.lazy(() => PullStatusSchema).optional(),
    vote: z
      .lazy(() => VoteUncheckedCreateNestedOneWithoutPullInputObjectSchema)
      .optional(),
    comments: z
      .lazy(() => CommentUncheckedCreateNestedManyWithoutPullInputObjectSchema)
      .optional(),
    points: z
      .lazy(() => PointUncheckedCreateNestedManyWithoutPullInputObjectSchema)
      .optional(),
    userId: z.string(),
  })
  .strict();

export const PullUncheckedCreateWithoutMusicInputObjectSchema = Schema;
