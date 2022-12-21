import { z } from 'zod';
import { LinkImageCreateInputObjectSchema } from './LinkImageCreateInput.schema';
import { LinkImageUpsertInputObjectSchema } from './LinkImageUpsertInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkImageNullableUpdateEnvelopeInput> = z
  .object({
    set: z
      .lazy(() => LinkImageCreateInputObjectSchema)
      .optional()
      .nullable(),
    upsert: z.lazy(() => LinkImageUpsertInputObjectSchema).optional(),
    unset: z.boolean().optional(),
  })
  .strict();

export const LinkImageNullableUpdateEnvelopeInputObjectSchema = Schema;
