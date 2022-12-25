import { z } from 'zod';
import { NotificationCreateWithoutCommentedInputObjectSchema } from './NotificationCreateWithoutCommentedInput.schema';
import { NotificationUncheckedCreateWithoutCommentedInputObjectSchema } from './NotificationUncheckedCreateWithoutCommentedInput.schema';
import { NotificationCreateOrConnectWithoutCommentedInputObjectSchema } from './NotificationCreateOrConnectWithoutCommentedInput.schema';
import { NotificationUpsertWithWhereUniqueWithoutCommentedInputObjectSchema } from './NotificationUpsertWithWhereUniqueWithoutCommentedInput.schema';
import { NotificationCreateManyCommentedInputEnvelopeObjectSchema } from './NotificationCreateManyCommentedInputEnvelope.schema';
import { NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithWhereUniqueWithoutCommentedInputObjectSchema } from './NotificationUpdateWithWhereUniqueWithoutCommentedInput.schema';
import { NotificationUpdateManyWithWhereWithoutCommentedInputObjectSchema } from './NotificationUpdateManyWithWhereWithoutCommentedInput.schema';
import { NotificationScalarWhereInputObjectSchema } from './NotificationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationUpdateManyWithoutCommentedNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              NotificationUpsertWithWhereUniqueWithoutCommentedInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                NotificationUpsertWithWhereUniqueWithoutCommentedInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => NotificationCreateManyCommentedInputEnvelopeObjectSchema)
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
              NotificationUpdateWithWhereUniqueWithoutCommentedInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                NotificationUpdateWithWhereUniqueWithoutCommentedInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              NotificationUpdateManyWithWhereWithoutCommentedInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                NotificationUpdateManyWithWhereWithoutCommentedInputObjectSchema,
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

export const NotificationUpdateManyWithoutCommentedNestedInputObjectSchema =
  Schema;
