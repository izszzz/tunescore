import { z } from 'zod';
import { FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';
import { FollowCreateWithoutFollowerInputObjectSchema } from './FollowCreateWithoutFollowerInput.schema';
import { FollowUncheckedCreateWithoutFollowerInputObjectSchema } from './FollowUncheckedCreateWithoutFollowerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowCreateOrConnectWithoutFollowerInput> = z
  .object({
    where: z.lazy(() => FollowWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => FollowCreateWithoutFollowerInputObjectSchema),
      z.lazy(() => FollowUncheckedCreateWithoutFollowerInputObjectSchema),
    ]),
  })
  .strict();

export const FollowCreateOrConnectWithoutFollowerInputObjectSchema = Schema;
