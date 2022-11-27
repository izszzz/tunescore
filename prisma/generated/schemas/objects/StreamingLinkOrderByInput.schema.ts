import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StreamingLinkOrderByInput> = z
  .object({
    youtube: z.lazy(() => SortOrderSchema).optional(),
    spotify: z.lazy(() => SortOrderSchema).optional(),
    itunes: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const StreamingLinkOrderByInputObjectSchema = Schema;
