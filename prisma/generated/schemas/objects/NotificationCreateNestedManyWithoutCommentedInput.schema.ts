import { z } from 'zod';
import { NotificationCreateWithoutCommentedInputObjectSchema } from './NotificationCreateWithoutCommentedInput.schema';
import { NotificationUncheckedCreateWithoutCommentedInputObjectSchema } from './NotificationUncheckedCreateWithoutCommentedInput.schema';
import { NotificationCreateOrConnectWithoutCommentedInputObjectSchema } from './NotificationCreateOrConnectWithoutCommentedInput.schema';
import { NotificationCreateManyCommentedInputEnvelopeObjectSchema } from './NotificationCreateManyCommentedInputEnvelope.schema';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateNestedManyWithoutCommentedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => NotificationCreateWithoutCommentedInputObjectSchema),
          z
            .lazy(() => NotificationCreateWithoutCommentedInputObjectSchema)
            .array(),
          z.lazy(
            () => NotificationUncheckedCreateWithoutCommentedInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                NotificationUncheckedCreateWithoutCommentedInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => NotificationCreateOrConnectWithoutCommentedInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                NotificationCreateOrConnectWithoutCommentedInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => NotificationCreateManyCommentedInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => NotificationWhereUniqueInputObjectSchema),
          z.lazy(() => NotificationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const NotificationCreateNestedManyWithoutCommentedInputObjectSchema =
  Schema;
