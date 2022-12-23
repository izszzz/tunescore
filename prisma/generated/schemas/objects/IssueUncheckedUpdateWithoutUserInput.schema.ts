import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CommentUncheckedUpdateManyWithoutIssueNestedInputObjectSchema } from './CommentUncheckedUpdateManyWithoutIssueNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUncheckedUpdateWithoutUserInput> = z
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
    comments: z
      .lazy(() => CommentUncheckedUpdateManyWithoutIssueNestedInputObjectSchema)
      .optional(),
    musicId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const IssueUncheckedUpdateWithoutUserInputObjectSchema = Schema;
