import { z } from 'zod';
import { FollowScalarWhereInputObjectSchema } from './FollowScalarWhereInput.schema';
import { FollowUpdateManyMutationInputObjectSchema } from './FollowUpdateManyMutationInput.schema';
import { FollowUncheckedUpdateManyWithoutFollowersInputObjectSchema } from './FollowUncheckedUpdateManyWithoutFollowersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUpdateManyWithWhereWithoutFollowerInput> =
  z
    .object({
      where: z.lazy(() => FollowScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => FollowUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => FollowUncheckedUpdateManyWithoutFollowersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FollowUpdateManyWithWhereWithoutFollowerInputObjectSchema = Schema;
