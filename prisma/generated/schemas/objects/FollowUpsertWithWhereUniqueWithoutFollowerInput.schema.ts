import { z } from 'zod';
import { FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';
import { FollowUpdateWithoutFollowerInputObjectSchema } from './FollowUpdateWithoutFollowerInput.schema';
import { FollowUncheckedUpdateWithoutFollowerInputObjectSchema } from './FollowUncheckedUpdateWithoutFollowerInput.schema';
import { FollowCreateWithoutFollowerInputObjectSchema } from './FollowCreateWithoutFollowerInput.schema';
import { FollowUncheckedCreateWithoutFollowerInputObjectSchema } from './FollowUncheckedCreateWithoutFollowerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUpsertWithWhereUniqueWithoutFollowerInput> =
  z
    .object({
      where: z.lazy(() => FollowWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => FollowUpdateWithoutFollowerInputObjectSchema),
        z.lazy(() => FollowUncheckedUpdateWithoutFollowerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => FollowCreateWithoutFollowerInputObjectSchema),
        z.lazy(() => FollowUncheckedCreateWithoutFollowerInputObjectSchema),
      ]),
    })
    .strict();

export const FollowUpsertWithWhereUniqueWithoutFollowerInputObjectSchema =
  Schema;
