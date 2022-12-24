import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PullUpdateOneWithoutCommentsNestedInputObjectSchema } from './PullUpdateOneWithoutCommentsNestedInput.schema';
import { IssueUpdateOneWithoutCommentsNestedInputObjectSchema } from './IssueUpdateOneWithoutCommentsNestedInput.schema';
import { CommentTypeSchema } from '../enums/CommentType.schema';
import { EnumCommentTypeFieldUpdateOperationsInputObjectSchema } from './EnumCommentTypeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateWithoutUserInput> = z
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
    issue: z
      .lazy(() => IssueUpdateOneWithoutCommentsNestedInputObjectSchema)
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => CommentTypeSchema),
        z.lazy(() => EnumCommentTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const CommentUpdateWithoutUserInputObjectSchema = Schema;
