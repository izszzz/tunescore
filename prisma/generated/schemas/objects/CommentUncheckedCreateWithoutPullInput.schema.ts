import { z } from 'zod';
import { NotificationUncheckedCreateNestedManyWithoutCommentedInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutCommentedInput.schema';
import { CommentTypeSchema } from '../enums/CommentType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedCreateWithoutPullInput> = z
  .object({
    id: z.string().optional(),
    body: z.string(),
    userId: z.string(),
    notifications: z
      .lazy(
        () =>
          NotificationUncheckedCreateNestedManyWithoutCommentedInputObjectSchema,
      )
      .optional(),
    resourceType: z.lazy(() => CommentTypeSchema),
  })
  .strict();

export const CommentUncheckedCreateWithoutPullInputObjectSchema = Schema;
