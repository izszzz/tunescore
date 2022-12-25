import { z } from 'zod';
import { CommentCreateWithoutNotificationsInputObjectSchema } from './CommentCreateWithoutNotificationsInput.schema';
import { CommentUncheckedCreateWithoutNotificationsInputObjectSchema } from './CommentUncheckedCreateWithoutNotificationsInput.schema';
import { CommentCreateOrConnectWithoutNotificationsInputObjectSchema } from './CommentCreateOrConnectWithoutNotificationsInput.schema';
import { CommentUpsertWithoutNotificationsInputObjectSchema } from './CommentUpsertWithoutNotificationsInput.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutNotificationsInputObjectSchema } from './CommentUpdateWithoutNotificationsInput.schema';
import { CommentUncheckedUpdateWithoutNotificationsInputObjectSchema } from './CommentUncheckedUpdateWithoutNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateOneWithoutNotificationsNestedInput> =
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
      upsert: z
        .lazy(() => CommentUpsertWithoutNotificationsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => CommentWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CommentUpdateWithoutNotificationsInputObjectSchema),
          z.lazy(
            () => CommentUncheckedUpdateWithoutNotificationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const CommentUpdateOneWithoutNotificationsNestedInputObjectSchema =
  Schema;
