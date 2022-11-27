import { z } from 'zod';
import { PullScoreCreateEnvelopeInputObjectSchema } from './PullScoreCreateEnvelopeInput.schema';
import { PullScoreCreateInputObjectSchema } from './PullScoreCreateInput.schema';
import { PullStatusSchema } from '../enums/PullStatus.schema';
import { MusicCreateNestedOneWithoutPullsInputObjectSchema } from './MusicCreateNestedOneWithoutPullsInput.schema';
import { UserCreateNestedOneWithoutPullsInputObjectSchema } from './UserCreateNestedOneWithoutPullsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    body: z.string(),
    score: z.union([
      z.lazy(() => PullScoreCreateEnvelopeInputObjectSchema),
      z.lazy(() => PullScoreCreateInputObjectSchema),
    ]),
    status: z.lazy(() => PullStatusSchema),
    music: z.lazy(() => MusicCreateNestedOneWithoutPullsInputObjectSchema),
    user: z.lazy(() => UserCreateNestedOneWithoutPullsInputObjectSchema),
  })
  .strict();

export const PullCreateInputObjectSchema = Schema;
