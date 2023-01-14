import { z } from 'zod';
import { PullScoreCreateEnvelopeInputObjectSchema } from './PullScoreCreateEnvelopeInput.schema';
import { PullScoreCreateInputObjectSchema } from './PullScoreCreateInput.schema';
import { PullStatusSchema } from '../enums/PullStatus.schema';
import { CommentCreateNestedManyWithoutPullInputObjectSchema } from './CommentCreateNestedManyWithoutPullInput.schema';
import { PointCreateNestedManyWithoutPullInputObjectSchema } from './PointCreateNestedManyWithoutPullInput.schema';
import { MusicCreateNestedOneWithoutPullsInputObjectSchema } from './MusicCreateNestedOneWithoutPullsInput.schema';
import { UserCreateNestedOneWithoutPullsInputObjectSchema } from './UserCreateNestedOneWithoutPullsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullCreateWithoutVoteInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    body: z.string(),
    score: z.union([
      z.lazy(() => PullScoreCreateEnvelopeInputObjectSchema),
      z.lazy(() => PullScoreCreateInputObjectSchema),
    ]),
    status: z.lazy(() => PullStatusSchema).optional(),
    comments: z
      .lazy(() => CommentCreateNestedManyWithoutPullInputObjectSchema)
      .optional(),
    points: z
      .lazy(() => PointCreateNestedManyWithoutPullInputObjectSchema)
      .optional(),
    music: z.lazy(() => MusicCreateNestedOneWithoutPullsInputObjectSchema),
    user: z.lazy(() => UserCreateNestedOneWithoutPullsInputObjectSchema),
  })
  .strict();

export const PullCreateWithoutVoteInputObjectSchema = Schema;
