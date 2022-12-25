import { z } from 'zod';
import { NotificationCreateWithoutBookmarkedInputObjectSchema } from './NotificationCreateWithoutBookmarkedInput.schema';
import { NotificationUncheckedCreateWithoutBookmarkedInputObjectSchema } from './NotificationUncheckedCreateWithoutBookmarkedInput.schema';
import { NotificationCreateOrConnectWithoutBookmarkedInputObjectSchema } from './NotificationCreateOrConnectWithoutBookmarkedInput.schema';
import { NotificationCreateManyBookmarkedInputEnvelopeObjectSchema } from './NotificationCreateManyBookmarkedInputEnvelope.schema';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationCreateNestedManyWithoutBookmarkedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => NotificationCreateWithoutBookmarkedInputObjectSchema),
          z
            .lazy(() => NotificationCreateWithoutBookmarkedInputObjectSchema)
            .array(),
          z.lazy(
            () => NotificationUncheckedCreateWithoutBookmarkedInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                NotificationUncheckedCreateWithoutBookmarkedInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => NotificationCreateOrConnectWithoutBookmarkedInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                NotificationCreateOrConnectWithoutBookmarkedInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => NotificationCreateManyBookmarkedInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => NotificationWhereUniqueInputObjectSchema),
          z.lazy(() => NotificationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const NotificationCreateNestedManyWithoutBookmarkedInputObjectSchema =
  Schema;
