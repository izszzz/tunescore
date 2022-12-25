import { z } from 'zod';
import { FollowCreateWithoutFollowingInputObjectSchema } from './FollowCreateWithoutFollowingInput.schema';
import { FollowUncheckedCreateWithoutFollowingInputObjectSchema } from './FollowUncheckedCreateWithoutFollowingInput.schema';
import { FollowCreateOrConnectWithoutFollowingInputObjectSchema } from './FollowCreateOrConnectWithoutFollowingInput.schema';
import { FollowCreateManyFollowingInputEnvelopeObjectSchema } from './FollowCreateManyFollowingInputEnvelope.schema';
import { FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput> =
  z
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
      createMany: z
        .lazy(() => FollowCreateManyFollowingInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => FollowWhereUniqueInputObjectSchema),
          z.lazy(() => FollowWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FollowUncheckedCreateNestedManyWithoutFollowingInputObjectSchema =
  Schema;
