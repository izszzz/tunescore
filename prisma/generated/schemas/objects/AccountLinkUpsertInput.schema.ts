import { z } from 'zod';
import { AccountLinkCreateInputObjectSchema } from './AccountLinkCreateInput.schema';
import { AccountLinkUpdateInputObjectSchema } from './AccountLinkUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountLinkUpsertInput> = z
  .object({
    set: z.lazy(() => AccountLinkCreateInputObjectSchema).nullable(),
    update: z.lazy(() => AccountLinkUpdateInputObjectSchema),
  })
  .strict();

export const AccountLinkUpsertInputObjectSchema = Schema;
