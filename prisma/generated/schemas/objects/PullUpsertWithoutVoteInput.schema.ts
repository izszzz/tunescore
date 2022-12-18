import { z } from 'zod';
import { PullUpdateWithoutVoteInputObjectSchema } from './PullUpdateWithoutVoteInput.schema';
import { PullUncheckedUpdateWithoutVoteInputObjectSchema } from './PullUncheckedUpdateWithoutVoteInput.schema';
import { PullCreateWithoutVoteInputObjectSchema } from './PullCreateWithoutVoteInput.schema';
import { PullUncheckedCreateWithoutVoteInputObjectSchema } from './PullUncheckedCreateWithoutVoteInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullUpsertWithoutVoteInput> = z
  .object({
    update: z.union([
      z.lazy(() => PullUpdateWithoutVoteInputObjectSchema),
      z.lazy(() => PullUncheckedUpdateWithoutVoteInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PullCreateWithoutVoteInputObjectSchema),
      z.lazy(() => PullUncheckedCreateWithoutVoteInputObjectSchema),
    ]),
  })
  .strict();

export const PullUpsertWithoutVoteInputObjectSchema = Schema;
