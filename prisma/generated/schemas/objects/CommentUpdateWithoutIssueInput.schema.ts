import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PullUpdateOneWithoutCommentsNestedInputObjectSchema } from './PullUpdateOneWithoutCommentsNestedInput.schema';
import { CommentTypeSchema } from '../enums/CommentType.schema';
import { EnumCommentTypeFieldUpdateOperationsInputObjectSchema } from './EnumCommentTypeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateWithoutIssueInput> = z
  .object({
    body: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    pull: z
      .lazy(() => PullUpdateOneWithoutCommentsNestedInputObjectSchema)
      .optional(),
    resurceType: z
      .union([
        z.lazy(() => CommentTypeSchema),
        z.lazy(() => EnumCommentTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const CommentUpdateWithoutIssueInputObjectSchema = Schema;
