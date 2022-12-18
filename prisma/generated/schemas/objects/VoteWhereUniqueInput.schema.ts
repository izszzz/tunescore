import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    pullId: z.string().optional(),
  })
  .strict();

export const VoteWhereUniqueInputObjectSchema = Schema;
