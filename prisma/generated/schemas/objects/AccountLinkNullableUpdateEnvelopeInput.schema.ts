import { z } from 'zod';
import { AccountLinkCreateInputObjectSchema } from './AccountLinkCreateInput.schema';
import { AccountLinkUpsertInputObjectSchema } from './AccountLinkUpsertInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountLinkNullableUpdateEnvelopeInput> = z
  .object({
    set: z
      .lazy(() => AccountLinkCreateInputObjectSchema)
      .optional()
      .nullable(),
    upsert: z.lazy(() => AccountLinkUpsertInputObjectSchema).optional(),
    unset: z.boolean().optional(),
  })
  .strict();

export const AccountLinkNullableUpdateEnvelopeInputObjectSchema = Schema;
