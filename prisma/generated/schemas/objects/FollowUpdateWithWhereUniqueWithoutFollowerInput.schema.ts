import { z } from 'zod';
import { FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';
import { FollowUpdateWithoutFollowerInputObjectSchema } from './FollowUpdateWithoutFollowerInput.schema';
import { FollowUncheckedUpdateWithoutFollowerInputObjectSchema } from './FollowUncheckedUpdateWithoutFollowerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUpdateWithWhereUniqueWithoutFollowerInput> =
  z
    .object({
      where: z.lazy(() => FollowWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => FollowUpdateWithoutFollowerInputObjectSchema),
        z.lazy(() => FollowUncheckedUpdateWithoutFollowerInputObjectSchema),
      ]),
    })
    .strict();

export const FollowUpdateWithWhereUniqueWithoutFollowerInputObjectSchema =
  Schema;
