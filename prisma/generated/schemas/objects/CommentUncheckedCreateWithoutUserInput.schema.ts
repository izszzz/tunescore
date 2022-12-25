import { z } from 'zod';
import { NotificationUncheckedCreateNestedManyWithoutCommentedInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutCommentedInput.schema';
import { CommentTypeSchema } from '../enums/CommentType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    body: z.string(),
    notifications: z
      .lazy(
        () =>
          NotificationUncheckedCreateNestedManyWithoutCommentedInputObjectSchema,
      )
      .optional(),
    resourceId: z.string(),
    resourceType: z.lazy(() => CommentTypeSchema),
  })
  .strict();

export const CommentUncheckedCreateWithoutUserInputObjectSchema = Schema;
