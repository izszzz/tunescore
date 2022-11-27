import { z } from 'zod';
import { StreamingLinkCreateInputObjectSchema } from './StreamingLinkCreateInput.schema';
import { StreamingLinkUpsertInputObjectSchema } from './StreamingLinkUpsertInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StreamingLinkNullableUpdateEnvelopeInput> = z
  .object({
    set: z
      .lazy(() => StreamingLinkCreateInputObjectSchema)
      .optional()
      .nullable(),
    upsert: z.lazy(() => StreamingLinkUpsertInputObjectSchema).optional(),
    unset: z.boolean().optional(),
  })
  .strict();

export const StreamingLinkNullableUpdateEnvelopeInputObjectSchema = Schema;
