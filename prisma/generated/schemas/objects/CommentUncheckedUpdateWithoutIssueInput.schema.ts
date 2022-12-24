import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CommentTypeSchema } from '../enums/CommentType.schema';
import { EnumCommentTypeFieldUpdateOperationsInputObjectSchema } from './EnumCommentTypeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedUpdateWithoutIssueInput> = z
  .object({
    body: z
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
    resourceType: z
      .union([
        z.lazy(() => CommentTypeSchema),
        z.lazy(() => EnumCommentTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const CommentUncheckedUpdateWithoutIssueInputObjectSchema = Schema;
