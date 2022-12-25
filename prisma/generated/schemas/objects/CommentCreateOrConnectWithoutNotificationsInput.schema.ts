import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentCreateWithoutNotificationsInputObjectSchema } from './CommentCreateWithoutNotificationsInput.schema';
import { CommentUncheckedCreateWithoutNotificationsInputObjectSchema } from './CommentUncheckedCreateWithoutNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateOrConnectWithoutNotificationsInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => CommentCreateWithoutNotificationsInputObjectSchema),
        z.lazy(
          () => CommentUncheckedCreateWithoutNotificationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const CommentCreateOrConnectWithoutNotificationsInputObjectSchema =
  Schema;
