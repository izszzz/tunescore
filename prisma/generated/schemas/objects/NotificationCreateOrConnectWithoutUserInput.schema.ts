import { z } from 'zod';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationCreateWithoutUserInputObjectSchema } from './NotificationCreateWithoutUserInput.schema';
import { NotificationUncheckedCreateWithoutUserInputObjectSchema } from './NotificationUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => NotificationCreateWithoutUserInputObjectSchema),
      z.lazy(() => NotificationUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const NotificationCreateOrConnectWithoutUserInputObjectSchema = Schema;
