import { z } from 'zod';
import { FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';
import { FollowUpdateWithoutFollowingInputObjectSchema } from './FollowUpdateWithoutFollowingInput.schema';
import { FollowUncheckedUpdateWithoutFollowingInputObjectSchema } from './FollowUncheckedUpdateWithoutFollowingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUpdateWithWhereUniqueWithoutFollowingInput> =
  z
    .object({
      where: z.lazy(() => FollowWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => FollowUpdateWithoutFollowingInputObjectSchema),
        z.lazy(() => FollowUncheckedUpdateWithoutFollowingInputObjectSchema),
      ]),
    })
    .strict();

export const FollowUpdateWithWhereUniqueWithoutFollowingInputObjectSchema =
  Schema;
