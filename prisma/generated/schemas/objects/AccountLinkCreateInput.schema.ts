import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountLinkCreateInput> = z
  .object({
    twitter: z.string().optional().nullable(),
    wikipedia: z.string().optional().nullable(),
  })
  .strict();

export const AccountLinkCreateInputObjectSchema = Schema;