import { z } from 'zod';
import { StreamingLinkNullableUpdateEnvelopeInputObjectSchema } from './StreamingLinkNullableUpdateEnvelopeInput.schema';
import { StreamingLinkCreateInputObjectSchema } from './StreamingLinkCreateInput.schema';
import { AccountLinkNullableUpdateEnvelopeInputObjectSchema } from './AccountLinkNullableUpdateEnvelopeInput.schema';
import { AccountLinkCreateInputObjectSchema } from './AccountLinkCreateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkUpdateInput> = z
  .object({
    streaming: z
      .union([
        z.lazy(() => StreamingLinkNullableUpdateEnvelopeInputObjectSchema),
        z.lazy(() => StreamingLinkCreateInputObjectSchema),
      ])
      .optional()
      .nullable(),
    account: z
      .union([
        z.lazy(() => AccountLinkNullableUpdateEnvelopeInputObjectSchema),
        z.lazy(() => AccountLinkCreateInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const LinkUpdateInputObjectSchema = Schema;
