import { z } from 'zod';
import { StreamingLinkObjectEqualityInputObjectSchema } from './StreamingLinkObjectEqualityInput.schema';
import { AccountLinkObjectEqualityInputObjectSchema } from './AccountLinkObjectEqualityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkListObjectEqualityInput> = z
  .object({
    streaming: z
      .lazy(() => StreamingLinkObjectEqualityInputObjectSchema)
      .optional()
      .nullable(),
    account: z
      .lazy(() => AccountLinkObjectEqualityInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const LinkListObjectEqualityInputObjectSchema = Schema;
