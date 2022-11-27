import { z } from 'zod';
import { LinkCreateInputObjectSchema } from './LinkCreateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkNullableCreateEnvelopeInput> = z
  .object({
    set: z
      .lazy(() => LinkCreateInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const LinkNullableCreateEnvelopeInputObjectSchema = Schema;
