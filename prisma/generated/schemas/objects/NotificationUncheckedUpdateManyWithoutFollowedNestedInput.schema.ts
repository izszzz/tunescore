import { z } from 'zod';
import { NotificationCreateWithoutFollowedInputObjectSchema } from './NotificationCreateWithoutFollowedInput.schema';
import { NotificationUncheckedCreateWithoutFollowedInputObjectSchema } from './NotificationUncheckedCreateWithoutFollowedInput.schema';
import { NotificationCreateOrConnectWithoutFollowedInputObjectSchema } from './NotificationCreateOrConnectWithoutFollowedInput.schema';
import { NotificationUpsertWithWhereUniqueWithoutFollowedInputObjectSchema } from './NotificationUpsertWithWhereUniqueWithoutFollowedInput.schema';
import { NotificationCreateManyFollowedInputEnvelopeObjectSchema } from './NotificationCreateManyFollowedInputEnvelope.schema';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithWhereUniqueWithoutFollowedInputObjectSchema } from './NotificationUpdateWithWhereUniqueWithoutFollowedInput.schema';
import { NotificationUpdateManyWithWhereWithoutFollowedInputObjectSchema } from './NotificationUpdateManyWithWhereWithoutFollowedInput.schema';
import { NotificationScalarWhereInputObjectSchema } from './NotificationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutFollowedNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              NotificationUpsertWithWhereUniqueWithoutFollowedInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                NotificationUpsertWithWhereUniqueWithoutFollowedInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => NotificationCreateManyFollowedInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => NotificationWhereUniqueInputObjectSchema),
          z.lazy(() => NotificationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => NotificationWhereUniqueInputObjectSchema),
          z.lazy(() => NotificationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => NotificationWhereUniqueInputObjectSchema),
          z.lazy(() => NotificationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => NotificationWhereUniqueInputObjectSchema),
          z.lazy(() => NotificationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              NotificationUpdateWithWhereUniqueWithoutFollowedInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                NotificationUpdateWithWhereUniqueWithoutFollowedInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              NotificationUpdateManyWithWhereWithoutFollowedInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                NotificationUpdateManyWithWhereWithoutFollowedInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => NotificationScalarWhereInputObjectSchema),
          z.lazy(() => NotificationScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const NotificationUncheckedUpdateManyWithoutFollowedNestedInputObjectSchema =
  Schema;
