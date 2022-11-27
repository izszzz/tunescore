import { z } from 'zod';
import { StreamingLinkOrderByInputObjectSchema } from './StreamingLinkOrderByInput.schema';
import { AccountLinkOrderByInputObjectSchema } from './AccountLinkOrderByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkOrderByInput> = z
  .object({
    streaming: z.lazy(() => StreamingLinkOrderByInputObjectSchema).optional(),
    account: z.lazy(() => AccountLinkOrderByInputObjectSchema).optional(),
  })
  .strict();

export const LinkOrderByInputObjectSchema = Schema;
