import { z } from 'zod';
import { FollowScalarWhereInputObjectSchema } from './FollowScalarWhereInput.schema';
import { FollowUpdateManyMutationInputObjectSchema } from './FollowUpdateManyMutationInput.schema';
import { FollowUncheckedUpdateManyWithoutFollowingInputObjectSchema } from './FollowUncheckedUpdateManyWithoutFollowingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUpdateManyWithWhereWithoutFollowingInput> =
  z
    .object({
      where: z.lazy(() => FollowScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => FollowUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => FollowUncheckedUpdateManyWithoutFollowingInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FollowUpdateManyWithWhereWithoutFollowingInputObjectSchema =
  Schema;
