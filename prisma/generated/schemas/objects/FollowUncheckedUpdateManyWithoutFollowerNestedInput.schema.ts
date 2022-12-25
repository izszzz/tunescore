import { z } from 'zod';
import { FollowCreateWithoutFollowerInputObjectSchema } from './FollowCreateWithoutFollowerInput.schema';
import { FollowUncheckedCreateWithoutFollowerInputObjectSchema } from './FollowUncheckedCreateWithoutFollowerInput.schema';
import { FollowCreateOrConnectWithoutFollowerInputObjectSchema } from './FollowCreateOrConnectWithoutFollowerInput.schema';
import { FollowUpsertWithWhereUniqueWithoutFollowerInputObjectSchema } from './FollowUpsertWithWhereUniqueWithoutFollowerInput.schema';
import { FollowCreateManyFollowerInputEnvelopeObjectSchema } from './FollowCreateManyFollowerInputEnvelope.schema';
import { FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';
import { FollowUpdateWithWhereUniqueWithoutFollowerInputObjectSchema } from './FollowUpdateWithWhereUniqueWithoutFollowerInput.schema';
import { FollowUpdateManyWithWhereWithoutFollowerInputObjectSchema } from './FollowUpdateManyWithWhereWithoutFollowerInput.schema';
import { FollowScalarWhereInputObjectSchema } from './FollowScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FollowCreateWithoutFollowerInputObjectSchema),
          z.lazy(() => FollowCreateWithoutFollowerInputObjectSchema).array(),
          z.lazy(() => FollowUncheckedCreateWithoutFollowerInputObjectSchema),
          z
            .lazy(() => FollowUncheckedCreateWithoutFollowerInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FollowCreateOrConnectWithoutFollowerInputObjectSchema),
          z
            .lazy(() => FollowCreateOrConnectWithoutFollowerInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => FollowUpsertWithWhereUniqueWithoutFollowerInputObjectSchema,
          ),
          z
            .lazy(
              () => FollowUpsertWithWhereUniqueWithoutFollowerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => FollowCreateManyFollowerInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => FollowWhereUniqueInputObjectSchema),
          z.lazy(() => FollowWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FollowWhereUniqueInputObjectSchema),
          z.lazy(() => FollowWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FollowWhereUniqueInputObjectSchema),
          z.lazy(() => FollowWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FollowWhereUniqueInputObjectSchema),
          z.lazy(() => FollowWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => FollowUpdateWithWhereUniqueWithoutFollowerInputObjectSchema,
          ),
          z
            .lazy(
              () => FollowUpdateWithWhereUniqueWithoutFollowerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => FollowUpdateManyWithWhereWithoutFollowerInputObjectSchema,
          ),
          z
            .lazy(
              () => FollowUpdateManyWithWhereWithoutFollowerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FollowScalarWhereInputObjectSchema),
          z.lazy(() => FollowScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FollowUncheckedUpdateManyWithoutFollowerNestedInputObjectSchema =
  Schema;
