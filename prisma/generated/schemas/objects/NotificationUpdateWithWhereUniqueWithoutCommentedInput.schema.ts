import { z } from 'zod';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithoutCommentedInputObjectSchema } from './NotificationUpdateWithoutCommentedInput.schema';
import { NotificationUncheckedUpdateWithoutCommentedInputObjectSchema } from './NotificationUncheckedUpdateWithoutCommentedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutCommentedInput> =
  z
    .object({
      where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => NotificationUpdateWithoutCommentedInputObjectSchema),
        z.lazy(
          () => NotificationUncheckedUpdateWithoutCommentedInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const NotificationUpdateWithWhereUniqueWithoutCommentedInputObjectSchema =
  Schema;
