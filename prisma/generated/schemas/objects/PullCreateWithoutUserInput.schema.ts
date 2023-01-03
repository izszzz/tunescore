import { z } from 'zod';
import { PullScoreCreateEnvelopeInputObjectSchema } from './PullScoreCreateEnvelopeInput.schema';
import { PullScoreCreateInputObjectSchema } from './PullScoreCreateInput.schema';
import { PullStatusSchema } from '../enums/PullStatus.schema';
import { VoteCreateNestedOneWithoutPullInputObjectSchema } from './VoteCreateNestedOneWithoutPullInput.schema';
import { CommentCreateNestedManyWithoutPullInputObjectSchema } from './CommentCreateNestedManyWithoutPullInput.schema';
import { MusicCreateNestedOneWithoutPullsInputObjectSchema } from './MusicCreateNestedOneWithoutPullsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullCreateWithoutUserInput> = z
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
      .lazy(() => VoteCreateNestedOneWithoutPullInputObjectSchema)
      .optional(),
    comments: z
      .lazy(() => CommentCreateNestedManyWithoutPullInputObjectSchema)
      .optional(),
    music: z.lazy(() => MusicCreateNestedOneWithoutPullsInputObjectSchema),
  })
  .strict();

export const PullCreateWithoutUserInputObjectSchema = Schema;
