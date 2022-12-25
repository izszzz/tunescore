import { z } from 'zod';
import { FollowCreateWithoutFollowerInputObjectSchema } from './FollowCreateWithoutFollowerInput.schema';
import { FollowUncheckedCreateWithoutFollowerInputObjectSchema } from './FollowUncheckedCreateWithoutFollowerInput.schema';
import { FollowCreateOrConnectWithoutFollowerInputObjectSchema } from './FollowCreateOrConnectWithoutFollowerInput.schema';
import { FollowCreateManyFollowerInputEnvelopeObjectSchema } from './FollowCreateManyFollowerInputEnvelope.schema';
import { FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput> =
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
      createMany: z
        .lazy(() => FollowCreateManyFollowerInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => FollowWhereUniqueInputObjectSchema),
          z.lazy(() => FollowWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FollowUncheckedCreateNestedManyWithoutFollowerInputObjectSchema =
  Schema;
