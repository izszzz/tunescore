import { z } from 'zod';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { LinkListUpsertInputObjectSchema } from './LinkListUpsertInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkListNullableUpdateEnvelopeInput> = z
  .object({
    set: z
      .lazy(() => LinkListCreateInputObjectSchema)
      .optional()
      .nullable(),
    upsert: z.lazy(() => LinkListUpsertInputObjectSchema).optional(),
    unset: z.boolean().optional(),
  })
  .strict();

export const LinkListNullableUpdateEnvelopeInputObjectSchema = Schema;
