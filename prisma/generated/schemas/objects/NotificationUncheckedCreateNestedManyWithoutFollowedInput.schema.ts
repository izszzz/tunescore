import { z } from 'zod';
import { NotificationCreateWithoutFollowedInputObjectSchema } from './NotificationCreateWithoutFollowedInput.schema';
import { NotificationUncheckedCreateWithoutFollowedInputObjectSchema } from './NotificationUncheckedCreateWithoutFollowedInput.schema';
import { NotificationCreateOrConnectWithoutFollowedInputObjectSchema } from './NotificationCreateOrConnectWithoutFollowedInput.schema';
import { NotificationCreateManyFollowedInputEnvelopeObjectSchema } from './NotificationCreateManyFollowedInputEnvelope.schema';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUncheckedCreateNestedManyWithoutFollowedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => NotificationCreateWithoutFollowedInputObjectSchema),
          z
            .lazy(() => NotificationCreateWithoutFollowedInputObjectSchema)
            .array(),
          z.lazy(
            () => NotificationUncheckedCreateWithoutFollowedInputObjectSchema,
          ),
          z
            .lazy(
              () => NotificationUncheckedCreateWithoutFollowedInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => NotificationCreateOrConnectWithoutFollowedInputObjectSchema,
          ),
          z
            .lazy(
              () => NotificationCreateOrConnectWithoutFollowedInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => NotificationCreateManyFollowedInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => NotificationWhereUniqueInputObjectSchema),
          z.lazy(() => NotificationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const NotificationUncheckedCreateNestedManyWithoutFollowedInputObjectSchema =
  Schema;
