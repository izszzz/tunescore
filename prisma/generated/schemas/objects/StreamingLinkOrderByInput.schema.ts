import { z } from 'zod';
import { LinkImageOrderByInputObjectSchema } from './LinkImageOrderByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StreamingLinkOrderByInput> = z
  .object({
    youtube: z.lazy(() => LinkImageOrderByInputObjectSchema).optional(),
    spotify: z.lazy(() => LinkImageOrderByInputObjectSchema).optional(),
    itunes: z.lazy(() => LinkImageOrderByInputObjectSchema).optional(),
  })
  .strict();

export const StreamingLinkOrderByInputObjectSchema = Schema;
