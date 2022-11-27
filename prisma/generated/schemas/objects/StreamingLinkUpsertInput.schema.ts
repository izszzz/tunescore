import { z } from 'zod';
import { StreamingLinkCreateInputObjectSchema } from './StreamingLinkCreateInput.schema';
import { StreamingLinkUpdateInputObjectSchema } from './StreamingLinkUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StreamingLinkUpsertInput> = z
  .object({
    set: z.lazy(() => StreamingLinkCreateInputObjectSchema).nullable(),
    update: z.lazy(() => StreamingLinkUpdateInputObjectSchema),
  })
  .strict();

export const StreamingLinkUpsertInputObjectSchema = Schema;
