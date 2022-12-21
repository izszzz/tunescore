import { z } from 'zod';
import { LinkOrderByInputObjectSchema } from './LinkOrderByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StreamingLinkOrderByInput> = z
  .object({
    youtube: z.lazy(() => LinkOrderByInputObjectSchema).optional(),
    spotify: z.lazy(() => LinkOrderByInputObjectSchema).optional(),
    itunes: z.lazy(() => LinkOrderByInputObjectSchema).optional(),
  })
  .strict();

export const StreamingLinkOrderByInputObjectSchema = Schema;
