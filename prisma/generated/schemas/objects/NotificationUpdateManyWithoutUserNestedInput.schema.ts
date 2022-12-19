import { z } from 'zod';
import { NotificationCreateWithoutUserInputObjectSchema } from './NotificationCreateWithoutUserInput.schema';
import { NotificationUncheckedCreateWithoutUserInputObjectSchema } from './NotificationUncheckedCreateWithoutUserInput.schema';
import { NotificationCreateOrConnectWithoutUserInputObjectSchema } from './NotificationCreateOrConnectWithoutUserInput.schema';
import { NotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './NotificationUpsertWithWhereUniqueWithoutUserInput.schema';
import { NotificationCreateManyUserInputEnvelopeObjectSchema } from './NotificationCreateManyUserInputEnvelope.schema';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './NotificationUpdateWithWhereUniqueWithoutUserInput.schema';
import { NotificationUpdateManyWithWhereWithoutUserInputObjectSchema } from './NotificationUpdateManyWithWhereWithoutUserInput.schema';
import { NotificationScalarWhereInputObjectSchema } from './NotificationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUpdateManyWithoutUserNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => NotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => NotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => NotificationCreateManyUserInputEnvelopeObjectSchema)
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
          () => NotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => NotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => NotificationUpdateManyWithWhereWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => NotificationUpdateManyWithWhereWithoutUserInputObjectSchema,
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

export const NotificationUpdateManyWithoutUserNestedInputObjectSchema = Schema;
