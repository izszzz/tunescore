import { z } from 'zod';
import { LinkCreateInputObjectSchema } from './LinkCreateInput.schema';
import { LinkUpsertInputObjectSchema } from './LinkUpsertInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkNullableUpdateEnvelopeInput> = z
  .object({
    set: z
      .lazy(() => LinkCreateInputObjectSchema)
      .optional()
      .nullable(),
    upsert: z.lazy(() => LinkUpsertInputObjectSchema).optional(),
    unset: z.boolean().optional(),
  })
  .strict();

export const LinkNullableUpdateEnvelopeInputObjectSchema = Schema;
