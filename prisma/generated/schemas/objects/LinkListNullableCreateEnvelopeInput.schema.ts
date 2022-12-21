import { z } from 'zod';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkListNullableCreateEnvelopeInput> = z
  .object({
    set: z
      .lazy(() => LinkListCreateInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const LinkListNullableCreateEnvelopeInputObjectSchema = Schema;
