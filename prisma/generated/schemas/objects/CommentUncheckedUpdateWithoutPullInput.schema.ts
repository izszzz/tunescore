import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NotificationUncheckedUpdateManyWithoutCommentedNestedInputObjectSchema } from './NotificationUncheckedUpdateManyWithoutCommentedNestedInput.schema';
import { CommentTypeSchema } from '../enums/CommentType.schema';
import { EnumCommentTypeFieldUpdateOperationsInputObjectSchema } from './EnumCommentTypeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedUpdateWithoutPullInput> = z
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
    notifications: z
      .lazy(
        () =>
          NotificationUncheckedUpdateManyWithoutCommentedNestedInputObjectSchema,
      )
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => CommentTypeSchema),
        z.lazy(() => EnumCommentTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const CommentUncheckedUpdateWithoutPullInputObjectSchema = Schema;