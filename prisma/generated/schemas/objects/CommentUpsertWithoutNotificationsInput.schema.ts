import { z } from 'zod';
import { CommentUpdateWithoutNotificationsInputObjectSchema } from './CommentUpdateWithoutNotificationsInput.schema';
import { CommentUncheckedUpdateWithoutNotificationsInputObjectSchema } from './CommentUncheckedUpdateWithoutNotificationsInput.schema';
import { CommentCreateWithoutNotificationsInputObjectSchema } from './CommentCreateWithoutNotificationsInput.schema';
import { CommentUncheckedCreateWithoutNotificationsInputObjectSchema } from './CommentUncheckedCreateWithoutNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpsertWithoutNotificationsInput> = z
  .object({
    update: z.union([
      z.lazy(() => CommentUpdateWithoutNotificationsInputObjectSchema),
      z.lazy(() => CommentUncheckedUpdateWithoutNotificationsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CommentCreateWithoutNotificationsInputObjectSchema),
      z.lazy(() => CommentUncheckedCreateWithoutNotificationsInputObjectSchema),
    ]),
  })
  .strict();

export const CommentUpsertWithoutNotificationsInputObjectSchema = Schema;
