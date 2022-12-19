import { z } from 'zod';
import { NotificationCreateWithoutUserInputObjectSchema } from './NotificationCreateWithoutUserInput.schema';
import { NotificationUncheckedCreateWithoutUserInputObjectSchema } from './NotificationUncheckedCreateWithoutUserInput.schema';
import { NotificationCreateOrConnectWithoutUserInputObjectSchema } from './NotificationCreateOrConnectWithoutUserInput.schema';
import { NotificationCreateManyUserInputEnvelopeObjectSchema } from './NotificationCreateManyUserInputEnvelope.schema';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => NotificationCreateWithoutUserInputObjectSchema),
        z.lazy(() => NotificationCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => NotificationUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => NotificationUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => NotificationCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => NotificationCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => NotificationCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => NotificationWhereUniqueInputObjectSchema),
        z.lazy(() => NotificationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const NotificationCreateNestedManyWithoutUserInputObjectSchema = Schema;
