import { z } from 'zod';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithoutUserInputObjectSchema } from './NotificationUpdateWithoutUserInput.schema';
import { NotificationUncheckedUpdateWithoutUserInputObjectSchema } from './NotificationUncheckedUpdateWithoutUserInput.schema';
import { NotificationCreateWithoutUserInputObjectSchema } from './NotificationCreateWithoutUserInput.schema';
import { NotificationUncheckedCreateWithoutUserInputObjectSchema } from './NotificationUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => NotificationUpdateWithoutUserInputObjectSchema),
        z.lazy(() => NotificationUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => NotificationCreateWithoutUserInputObjectSchema),
        z.lazy(() => NotificationUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const NotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
