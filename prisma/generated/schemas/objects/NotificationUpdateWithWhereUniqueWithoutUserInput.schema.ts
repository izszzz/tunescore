import { z } from 'zod';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithoutUserInputObjectSchema } from './NotificationUpdateWithoutUserInput.schema';
import { NotificationUncheckedUpdateWithoutUserInputObjectSchema } from './NotificationUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => NotificationUpdateWithoutUserInputObjectSchema),
        z.lazy(() => NotificationUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const NotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
