import { z } from 'zod';
import { FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';
import { FollowUpdateWithoutFollowingInputObjectSchema } from './FollowUpdateWithoutFollowingInput.schema';
import { FollowUncheckedUpdateWithoutFollowingInputObjectSchema } from './FollowUncheckedUpdateWithoutFollowingInput.schema';
import { FollowCreateWithoutFollowingInputObjectSchema } from './FollowCreateWithoutFollowingInput.schema';
import { FollowUncheckedCreateWithoutFollowingInputObjectSchema } from './FollowUncheckedCreateWithoutFollowingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUpsertWithWhereUniqueWithoutFollowingInput> =
  z
    .object({
      where: z.lazy(() => FollowWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => FollowUpdateWithoutFollowingInputObjectSchema),
        z.lazy(() => FollowUncheckedUpdateWithoutFollowingInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => FollowCreateWithoutFollowingInputObjectSchema),
        z.lazy(() => FollowUncheckedCreateWithoutFollowingInputObjectSchema),
      ]),
    })
    .strict();

export const FollowUpsertWithWhereUniqueWithoutFollowingInputObjectSchema =
  Schema;
