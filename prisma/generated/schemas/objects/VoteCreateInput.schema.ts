import { z } from 'zod';
import { PullCreateNestedOneWithoutVoteInputObjectSchema } from './PullCreateNestedOneWithoutVoteInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteCreateInput> = z
  .object({
    id: z.string().optional(),
    start: z.date().optional(),
    end: z.date(),
    good: z.number().optional(),
    bad: z.number().optional(),
    pull: z.lazy(() => PullCreateNestedOneWithoutVoteInputObjectSchema),
  })
  .strict();

export const VoteCreateInputObjectSchema = Schema;
