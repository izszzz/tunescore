import { z } from 'zod';
import { VoteUpdateWithoutPullInputObjectSchema } from './VoteUpdateWithoutPullInput.schema';
import { VoteUncheckedUpdateWithoutPullInputObjectSchema } from './VoteUncheckedUpdateWithoutPullInput.schema';
import { VoteCreateWithoutPullInputObjectSchema } from './VoteCreateWithoutPullInput.schema';
import { VoteUncheckedCreateWithoutPullInputObjectSchema } from './VoteUncheckedCreateWithoutPullInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteUpsertWithoutPullInput> = z
  .object({
    update: z.union([
      z.lazy(() => VoteUpdateWithoutPullInputObjectSchema),
      z.lazy(() => VoteUncheckedUpdateWithoutPullInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VoteCreateWithoutPullInputObjectSchema),
      z.lazy(() => VoteUncheckedCreateWithoutPullInputObjectSchema),
    ]),
  })
  .strict();

export const VoteUpsertWithoutPullInputObjectSchema = Schema;
