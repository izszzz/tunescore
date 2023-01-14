import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IssueStatusSchema } from '../enums/IssueStatus.schema';
import { EnumIssueStatusFieldUpdateOperationsInputObjectSchema } from './EnumIssueStatusFieldUpdateOperationsInput.schema';
import { CommentUpdateManyWithoutIssueNestedInputObjectSchema } from './CommentUpdateManyWithoutIssueNestedInput.schema';
import { PointUpdateManyWithoutIssueNestedInputObjectSchema } from './PointUpdateManyWithoutIssueNestedInput.schema';
import { MusicUpdateOneRequiredWithoutIssuesNestedInputObjectSchema } from './MusicUpdateOneRequiredWithoutIssuesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUpdateWithoutUserInput> = z
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
    status: z
      .union([
        z.lazy(() => IssueStatusSchema),
        z.lazy(() => EnumIssueStatusFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    comments: z
      .lazy(() => CommentUpdateManyWithoutIssueNestedInputObjectSchema)
      .optional(),
    points: z
      .lazy(() => PointUpdateManyWithoutIssueNestedInputObjectSchema)
      .optional(),
    music: z
      .lazy(() => MusicUpdateOneRequiredWithoutIssuesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const IssueUpdateWithoutUserInputObjectSchema = Schema;
