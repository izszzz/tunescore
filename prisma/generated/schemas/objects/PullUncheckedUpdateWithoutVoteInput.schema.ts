import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PullScoreUpdateEnvelopeInputObjectSchema } from './PullScoreUpdateEnvelopeInput.schema';
import { PullScoreCreateInputObjectSchema } from './PullScoreCreateInput.schema';
import { PullStatusSchema } from '../enums/PullStatus.schema';
import { EnumPullStatusFieldUpdateOperationsInputObjectSchema } from './EnumPullStatusFieldUpdateOperationsInput.schema';
import { CommentUncheckedUpdateManyWithoutPullNestedInputObjectSchema } from './CommentUncheckedUpdateManyWithoutPullNestedInput.schema';
import { PointUncheckedUpdateManyWithoutPullNestedInputObjectSchema } from './PointUncheckedUpdateManyWithoutPullNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUncheckedUpdateWithoutVoteInput> = z
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
    comments: z
      .lazy(() => CommentUncheckedUpdateManyWithoutPullNestedInputObjectSchema)
      .optional(),
    points: z
      .lazy(() => PointUncheckedUpdateManyWithoutPullNestedInputObjectSchema)
      .optional(),
    musicId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    userId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PullUncheckedUpdateWithoutVoteInputObjectSchema = Schema;
