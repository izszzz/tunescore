import { z } from 'zod';
import { StreamingLinkCreateInputObjectSchema } from './StreamingLinkCreateInput.schema';
import { AccountLinkCreateInputObjectSchema } from './AccountLinkCreateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkCreateInput> = z
  .object({
    streaming: z
      .lazy(() => StreamingLinkCreateInputObjectSchema)
      .optional()
      .nullable(),
    account: z
      .lazy(() => AccountLinkCreateInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const LinkCreateInputObjectSchema = Schema;
