import { z } from 'zod';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationCreateWithoutCommentedInputObjectSchema } from './NotificationCreateWithoutCommentedInput.schema';
import { NotificationUncheckedCreateWithoutCommentedInputObjectSchema } from './NotificationUncheckedCreateWithoutCommentedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutCommentedInput> =
  z
    .object({
      where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => NotificationCreateWithoutCommentedInputObjectSchema),
        z.lazy(
          () => NotificationUncheckedCreateWithoutCommentedInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const NotificationCreateOrConnectWithoutCommentedInputObjectSchema =
  Schema;
