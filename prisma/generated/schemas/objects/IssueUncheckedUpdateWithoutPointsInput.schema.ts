import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IssueStatusSchema } from '../enums/IssueStatus.schema';
import { EnumIssueStatusFieldUpdateOperationsInputObjectSchema } from './EnumIssueStatusFieldUpdateOperationsInput.schema';
import { CommentUncheckedUpdateManyWithoutIssueNestedInputObjectSchema } from './CommentUncheckedUpdateManyWithoutIssueNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUncheckedUpdateWithoutPointsInput> = z
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
      .lazy(() => CommentUncheckedUpdateManyWithoutIssueNestedInputObjectSchema)
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

export const IssueUncheckedUpdateWithoutPointsInputObjectSchema = Schema;