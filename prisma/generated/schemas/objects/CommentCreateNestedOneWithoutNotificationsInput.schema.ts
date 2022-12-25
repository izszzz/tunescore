import { z } from 'zod';
import { CommentCreateWithoutNotificationsInputObjectSchema } from './CommentCreateWithoutNotificationsInput.schema';
import { CommentUncheckedCreateWithoutNotificationsInputObjectSchema } from './CommentUncheckedCreateWithoutNotificationsInput.schema';
import { CommentCreateOrConnectWithoutNotificationsInputObjectSchema } from './CommentCreateOrConnectWithoutNotificationsInput.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateNestedOneWithoutNotificationsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CommentCreateWithoutNotificationsInputObjectSchema),
          z.lazy(
            () => CommentUncheckedCreateWithoutNotificationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CommentCreateOrConnectWithoutNotificationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CommentWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const CommentCreateNestedOneWithoutNotificationsInputObjectSchema =
  Schema;
