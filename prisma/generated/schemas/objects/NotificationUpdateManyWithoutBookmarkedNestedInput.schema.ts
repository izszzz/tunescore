import { z } from 'zod';
import { NotificationCreateWithoutBookmarkedInputObjectSchema } from './NotificationCreateWithoutBookmarkedInput.schema';
import { NotificationUncheckedCreateWithoutBookmarkedInputObjectSchema } from './NotificationUncheckedCreateWithoutBookmarkedInput.schema';
import { NotificationCreateOrConnectWithoutBookmarkedInputObjectSchema } from './NotificationCreateOrConnectWithoutBookmarkedInput.schema';
import { NotificationUpsertWithWhereUniqueWithoutBookmarkedInputObjectSchema } from './NotificationUpsertWithWhereUniqueWithoutBookmarkedInput.schema';
import { NotificationCreateManyBookmarkedInputEnvelopeObjectSchema } from './NotificationCreateManyBookmarkedInputEnvelope.schema';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithWhereUniqueWithoutBookmarkedInputObjectSchema } from './NotificationUpdateWithWhereUniqueWithoutBookmarkedInput.schema';
import { NotificationUpdateManyWithWhereWithoutBookmarkedInputObjectSchema } from './NotificationUpdateManyWithWhereWithoutBookmarkedInput.schema';
import { NotificationScalarWhereInputObjectSchema } from './NotificationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUpdateManyWithoutBookmarkedNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              NotificationUpsertWithWhereUniqueWithoutBookmarkedInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                NotificationUpsertWithWhereUniqueWithoutBookmarkedInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => NotificationCreateManyBookmarkedInputEnvelopeObjectSchema)
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
              NotificationUpdateWithWhereUniqueWithoutBookmarkedInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                NotificationUpdateWithWhereUniqueWithoutBookmarkedInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              NotificationUpdateManyWithWhereWithoutBookmarkedInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                NotificationUpdateManyWithWhereWithoutBookmarkedInputObjectSchema,
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

export const NotificationUpdateManyWithoutBookmarkedNestedInputObjectSchema =
  Schema;
