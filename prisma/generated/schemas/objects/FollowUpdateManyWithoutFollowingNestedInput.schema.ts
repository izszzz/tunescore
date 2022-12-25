import { z } from 'zod';
import { FollowCreateWithoutFollowingInputObjectSchema } from './FollowCreateWithoutFollowingInput.schema';
import { FollowUncheckedCreateWithoutFollowingInputObjectSchema } from './FollowUncheckedCreateWithoutFollowingInput.schema';
import { FollowCreateOrConnectWithoutFollowingInputObjectSchema } from './FollowCreateOrConnectWithoutFollowingInput.schema';
import { FollowUpsertWithWhereUniqueWithoutFollowingInputObjectSchema } from './FollowUpsertWithWhereUniqueWithoutFollowingInput.schema';
import { FollowCreateManyFollowingInputEnvelopeObjectSchema } from './FollowCreateManyFollowingInputEnvelope.schema';
import { FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';
import { FollowUpdateWithWhereUniqueWithoutFollowingInputObjectSchema } from './FollowUpdateWithWhereUniqueWithoutFollowingInput.schema';
import { FollowUpdateManyWithWhereWithoutFollowingInputObjectSchema } from './FollowUpdateManyWithWhereWithoutFollowingInput.schema';
import { FollowScalarWhereInputObjectSchema } from './FollowScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUpdateManyWithoutFollowingNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => FollowCreateWithoutFollowingInputObjectSchema),
        z.lazy(() => FollowCreateWithoutFollowingInputObjectSchema).array(),
        z.lazy(() => FollowUncheckedCreateWithoutFollowingInputObjectSchema),
        z
          .lazy(() => FollowUncheckedCreateWithoutFollowingInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => FollowCreateOrConnectWithoutFollowingInputObjectSchema),
        z
          .lazy(() => FollowCreateOrConnectWithoutFollowingInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => FollowUpsertWithWhereUniqueWithoutFollowingInputObjectSchema,
        ),
        z
          .lazy(
            () => FollowUpsertWithWhereUniqueWithoutFollowingInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => FollowCreateManyFollowingInputEnvelopeObjectSchema)
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
          () => FollowUpdateWithWhereUniqueWithoutFollowingInputObjectSchema,
        ),
        z
          .lazy(
            () => FollowUpdateWithWhereUniqueWithoutFollowingInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => FollowUpdateManyWithWhereWithoutFollowingInputObjectSchema,
        ),
        z
          .lazy(
            () => FollowUpdateManyWithWhereWithoutFollowingInputObjectSchema,
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

export const FollowUpdateManyWithoutFollowingNestedInputObjectSchema = Schema;
