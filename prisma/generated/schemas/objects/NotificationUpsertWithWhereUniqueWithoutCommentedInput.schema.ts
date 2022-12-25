import { z } from 'zod';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithoutCommentedInputObjectSchema } from './NotificationUpdateWithoutCommentedInput.schema';
import { NotificationUncheckedUpdateWithoutCommentedInputObjectSchema } from './NotificationUncheckedUpdateWithoutCommentedInput.schema';
import { NotificationCreateWithoutCommentedInputObjectSchema } from './NotificationCreateWithoutCommentedInput.schema';
import { NotificationUncheckedCreateWithoutCommentedInputObjectSchema } from './NotificationUncheckedCreateWithoutCommentedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutCommentedInput> =
  z
    .object({
      where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => NotificationUpdateWithoutCommentedInputObjectSchema),
        z.lazy(
          () => NotificationUncheckedUpdateWithoutCommentedInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => NotificationCreateWithoutCommentedInputObjectSchema),
        z.lazy(
          () => NotificationUncheckedCreateWithoutCommentedInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const NotificationUpsertWithWhereUniqueWithoutCommentedInputObjectSchema =
  Schema;
