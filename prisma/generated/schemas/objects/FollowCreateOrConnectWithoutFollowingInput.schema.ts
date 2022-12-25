import { z } from 'zod';
import { FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';
import { FollowCreateWithoutFollowingInputObjectSchema } from './FollowCreateWithoutFollowingInput.schema';
import { FollowUncheckedCreateWithoutFollowingInputObjectSchema } from './FollowUncheckedCreateWithoutFollowingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowCreateOrConnectWithoutFollowingInput> = z
  .object({
    where: z.lazy(() => FollowWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => FollowCreateWithoutFollowingInputObjectSchema),
      z.lazy(() => FollowUncheckedCreateWithoutFollowingInputObjectSchema),
    ]),
  })
  .strict();

export const FollowCreateOrConnectWithoutFollowingInputObjectSchema = Schema;
