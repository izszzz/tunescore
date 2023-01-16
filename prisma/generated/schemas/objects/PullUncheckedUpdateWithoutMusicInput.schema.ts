import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PullScoreUpdateEnvelopeInputObjectSchema } from './PullScoreUpdateEnvelopeInput.schema';
import { PullScoreCreateInputObjectSchema } from './PullScoreCreateInput.schema';
import { PullStatusSchema } from '../enums/PullStatus.schema';
import { EnumPullStatusFieldUpdateOperationsInputObjectSchema } from './EnumPullStatusFieldUpdateOperationsInput.schema';
import { VoteUncheckedUpdateOneWithoutPullNestedInputObjectSchema } from './VoteUncheckedUpdateOneWithoutPullNestedInput.schema';
import { CommentUncheckedUpdateManyWithoutPullNestedInputObjectSchema } from './CommentUncheckedUpdateManyWithoutPullNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUncheckedUpdateWithoutMusicInput> = z
  .object({
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    body: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    score: z
      .union([
        z.lazy(() => PullScoreUpdateEnvelopeInputObjectSchema),
        z.lazy(() => PullScoreCreateInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => PullStatusSchema),
        z.lazy(() => EnumPullStatusFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    vote: z
      .lazy(() => VoteUncheckedUpdateOneWithoutPullNestedInputObjectSchema)
      .optional(),
    comments: z
      .lazy(() => CommentUncheckedUpdateManyWithoutPullNestedInputObjectSchema)
      .optional(),
    userId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PullUncheckedUpdateWithoutMusicInputObjectSchema = Schema;
