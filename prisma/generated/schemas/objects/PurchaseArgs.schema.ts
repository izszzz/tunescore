import { z } from 'zod';
import { PurchaseSelectObjectSchema } from './PurchaseSelect.schema';
import { PurchaseIncludeObjectSchema } from './PurchaseInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseArgs> = z
  .object({
    select: z.lazy(() => PurchaseSelectObjectSchema).optional(),
    include: z.lazy(() => PurchaseIncludeObjectSchema).optional(),
  })
  .strict();

export const PurchaseArgsObjectSchema = Schema;
