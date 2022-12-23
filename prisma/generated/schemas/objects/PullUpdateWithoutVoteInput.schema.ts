import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PullScoreUpdateEnvelopeInputObjectSchema } from './PullScoreUpdateEnvelopeInput.schema';
import { PullScoreCreateInputObjectSchema } from './PullScoreCreateInput.schema';
import { PullStatusSchema } from '../enums/PullStatus.schema';
import { EnumPullStatusFieldUpdateOperationsInputObjectSchema } from './EnumPullStatusFieldUpdateOperationsInput.schema';
import { CommentUpdateManyWithoutPullNestedInputObjectSchema } from './CommentUpdateManyWithoutPullNestedInput.schema';
import { MusicUpdateOneRequiredWithoutPullsNestedInputObjectSchema } from './MusicUpdateOneRequiredWithoutPullsNestedInput.schema';
import { UserUpdateOneRequiredWithoutPullsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPullsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUpdateWithoutVoteInput> = z
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
      .lazy(() => CommentUpdateManyWithoutPullNestedInputObjectSchema)
      .optional(),
    music: z
      .lazy(() => MusicUpdateOneRequiredWithoutPullsNestedInputObjectSchema)
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutPullsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PullUpdateWithoutVoteInputObjectSchema = Schema;
